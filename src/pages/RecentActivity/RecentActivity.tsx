import React from 'react'
import Spacing from '../../components/atoms/Spacing/Spacing'
import Header from '../../components/molecules/Header/Header'
import SearchInput from '../../components/molecules/SearchInput/SearchInput'
import ActivityList from '../../components/templates/ActivityList/ActivityList'
import Layout from '../../components/templates/Layout/Layout'
import { IUserActivity } from './../../components/templates/ActivityList/ActivityList'
import { useDispatch } from 'react-redux'
import { addSearchInput } from '../../store/reducers/recent_activity/RecentActivityReducer'
import { parseDateToString, sortDatesDescCompare, stringToDate } from '../../utils/dates/base'
import { jsonKeyExists } from '../../utils/json/base'


interface IGame {
    accurateDate?: {
        date: string;
    };
    date: string;
    location: string;
    otherPlayers: ReadonlyArray<string>
    winnerName: string;
}

interface IUserList {
    avatar?: string;
    fullName: string;
    games: ReadonlyArray<IGame>
    membershipDate?: string
}

interface IRecentActivity {
    loading: boolean
    userList: ReadonlyArray<IUserList>
}

interface IDataFromUserListResponse {
    ratio: number;
    uniqueOpponentsList: ReadonlyArray<string>;
    lastActivity: string;
}

// Method to sort the data in a descending order
const sortUserList = (userList: ReadonlyArray<IUserActivity>): ReadonlyArray<IUserActivity> =>
    [...userList].sort((a: IUserActivity, b: IUserActivity) =>
        sortDatesDescCompare(a.userLastActivity, b.userLastActivity))

// This method get the times user won a game
const calculateWinnerRatio = (ratio: number, fullName: string, game: IGame): number =>
    ratio + (game.winnerName === fullName ? 1 : 0)


// This method calculate all the unique opponents that had an user
const calculateUniqueOpponents = (uniqueOpponentsList: ReadonlyArray<string>, game: IGame): ReadonlyArray<string> =>
    Array.from(new Set([ ...uniqueOpponentsList, ...game.otherPlayers]))


// This method calculate the last Game of the user
const calculateLastActivity = (lastActivity: string, game: IGame) => {

    // initial date
    let lastActivityDate: Date = stringToDate(lastActivity, "yyyy-MM-dd");
    let gameDate: Date =
        stringToDate(
            jsonKeyExists(game, 'accurateDate') ?       game.accurateDate.date
            : /* Otherwise */                           game.date, "yyyy-MM-dd"
        );

    return lastActivityDate > gameDate ?
        parseDateToString(lastActivityDate, "yyyy-MM-dd") : parseDateToString(gameDate, "yyyy-MM-dd")
}

// We map data from fake hook and transform it to the format of the exercise
const dataFromUserList = (fullName: string, games: ReadonlyArray<IGame>): IDataFromUserListResponse =>
    games.reduce((response: IDataFromUserListResponse, game: IGame) => ({
        ratio: calculateWinnerRatio(response.ratio, fullName, game),
        uniqueOpponentsList: calculateUniqueOpponents(response.uniqueOpponentsList, game),
        lastActivity: calculateLastActivity(response.lastActivity, game)
    }), {
        ratio: 0,
        uniqueOpponentsList: [],
        lastActivity: '1990-01-01'
    })

// We get all the variables that we need to form the new objects
const userListDataEnrichment = (userList: ReadonlyArray<IUserList>): ReadonlyArray<IUserActivity> =>
    !userList ? []
        : userList.map((userData: IUserList) => {

            const UserListExtraData = dataFromUserList(userData.fullName, userData.games)
            
            return {
                imageUrl: userData.avatar,
                userName: userData.fullName,
                userLastActivity: UserListExtraData.lastActivity,
                userUniqueOpponents: UserListExtraData.uniqueOpponentsList.length,
                ratio: parseFloat((UserListExtraData.ratio / userData.games.length).toFixed(1))
            }
        })



const i18n = {
    header: 'Recent Activity'
}

const RecentActivity: React.FC<IRecentActivity> = ({ loading, userList }) => {

    const dispatch = useDispatch()

    const searchInputHandler = (searchInput: string) =>
        dispatch(addSearchInput(searchInput))

    const enrichedData = userListDataEnrichment(userList)
    
    const sortedData = sortUserList(enrichedData)
    
    return <Layout>
        <div style={{ width: '100%'}}>
            <Header title={i18n.header} />
            <Spacing variant={'cg-header-spacing'} />
            <SearchInput searchInputHandler={searchInputHandler} />
            <Spacing variant={'cg-search-input-spacing'} />
            <ActivityList userActivityList={sortedData} loading={loading} />
        </div>

    </Layout>
}


export default RecentActivity