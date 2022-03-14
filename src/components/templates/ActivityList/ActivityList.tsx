import React from 'react'
import { ClassificationByRatio } from '../../../utils/match/ClassificationByRatio'
import Card from '../../organisms/Card/Card'

export interface IUserActivity {
    imageUrl: string;
    userName: string;
    userLastActivity: string;
    userUniqueOpponents: number;
    ratio: number
}

interface IActivityList {
    userActivityList: ReadonlyArray<IUserActivity>
    loading: boolean
}

const ActivityList: React.FC<IActivityList> = ({ userActivityList, loading }) =>
    <div className='cg-activity-list-container'>
        {loading ?
            'Loading...'
            : userActivityList.map((userActivity: IUserActivity, index: number) =>
                <Card
                    key={index}
                    customClass={'cg-activity-list-card ' + (index % 2 !== 0 ? 'cg-activity-list-odd-card' : '')}
                    cardTitle={userActivity.userName}
                    cardSubtitle={`Last Activity: ${userActivity.userLastActivity}`}
                    cardDetail={`Unique Opponents: ${userActivity.userUniqueOpponents}`}
                    ratio={userActivity.ratio}
                    classification={ClassificationByRatio(userActivity.ratio)}
                    avatar={userActivity.imageUrl}
                />
            )}
    </div>

export default ActivityList