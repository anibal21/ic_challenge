import React from 'react'
import Spacing from '../../components/atoms/Spacing/Spacing'
import Header from '../../components/molecules/Header/Header'
import SearchInput from '../../components/molecules/SearchInput/SearchInput'
import ActivityList from '../../components/templates/ActivityList/ActivityList'
import Layout from '../../components/templates/Layout/Layout'
import { IUserActivity } from './../../components/templates/ActivityList/ActivityList'
import { parse, format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { addSearchInput } from '../../store/reducers/recent_activity/RecentActivityReducer'


interface IGame {
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

const i18n = {
    header: 'Recent Activity'
}

interface IDataFromUserListResponse {
    ratio: number;
    uniqueOpponentsList: ReadonlyArray<string>;
    lastActivity: string;
}

const calculateWinnerRatio = (ratio: number, fullName: string, game: IGame): number =>
    ratio + (game.winnerName === fullName ? 1 : 0)

const calculateUniqueOpponents = (uniqueOpponentsList: ReadonlyArray<string>, game: IGame): ReadonlyArray<string> =>
    Array.from(new Set([ ...uniqueOpponentsList, ...game.otherPlayers]))

const parseDateToString = (date: Date, pattern: string) =>
    format(date, pattern)

const calculateLastActivity = (lastActivity: string, game: IGame) => {

    // initial date
    let lastActivityDate: Date = parse(lastActivity, "yyyy-MM-dd", new Date());
    let gameDate: Date = parse(game.date, "yyyy-MM-dd", new Date());

    return lastActivityDate > gameDate ?
        parseDateToString(lastActivityDate, "yyyy-MM-dd") : parseDateToString(gameDate, "yyyy-MM-dd")
}

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

const sortUserList = (userList: ReadonlyArray<IUserActivity>): ReadonlyArray<IUserActivity> =>
    [...userList].sort(function compare(a: IUserActivity, b: IUserActivity) {

        let dateA: Date = parse(a.userLastActivity, "yyyy-MM-dd", new Date());
        let dateB: Date = parse(b.userLastActivity, "yyyy-MM-dd", new Date());        

        if (dateA < dateB) {
        return 1;
        }
        if (dateA > dateB) {
        return -1;
        }
        // a debe ser igual b
        return 0;
    })

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