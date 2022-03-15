import React from 'react'
import { SeverityStyle } from '../../../utils/enums/SeverityStyle'
import { ClassificationByRatio } from '../../../utils/match/ClassificationByRatio'
import DialogMessage from '../../molecules/DialogMessage/DialogMessage'
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
    error?: string
}

const ActivityList: React.FC<IActivityList> = ({ userActivityList, loading, error }) =>
    // eslint-disable-next-line jsx-a11y/aria-role
    <div role="activityList" className='cg-activity-list-container'>
        {loading ?
            <DialogMessage text={'Loading...'} severity={SeverityStyle.INFO}/>
            : error ? <DialogMessage text={error} severity={SeverityStyle.ERROR}/>
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