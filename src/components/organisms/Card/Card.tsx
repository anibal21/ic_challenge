import React from 'react'
import CardImage from '../../atoms/CardImage/CardImage'
import Badge from '../../atoms/Badge/Badge'
import CardDetail from './../../molecules/CardDetail/CardDetail'

interface ICard {
    avatar: string;
    ratio: number;
    classification: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetail: string;
    customClass?: string;
}

const Card: React.FC<ICard> =
    ({ avatar, ratio, classification, cardTitle, cardSubtitle, cardDetail, customClass }) => {

    return <div className={`cg-card-container ${customClass}`}>
        <div className={'cg-card-body-container'}>
            <CardImage src={avatar} />
            <CardDetail
                title={cardTitle}
                subtitle={cardSubtitle}
                detail={cardDetail}
                customStyle={'cg-card-spacing-card-detail'}
            ></CardDetail>
        </div>
        <div className={'cg-card-badge-container'}>
            <Badge number={ratio.toString()} classification={classification}/>
        </div>
    </div>
}

export default Card