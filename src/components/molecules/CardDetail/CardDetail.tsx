import React from 'react'
import Spacing from '../../atoms/Spacing/Spacing'
import Typography from '../../atoms/Typography/Typography'
import { TypographyStyle } from './../../../utils/enums/enums'

interface ICardDetail {
    title: string;
    subtitle: string;
    detail: string;
    customStyle?: string;
}

const CardDetail: React.FC<ICardDetail> = ({ title, subtitle, detail, customStyle}) =>
    <div className={`cg-card-detail-container ${customStyle}`}>
        <Typography value={title} variant={TypographyStyle.H5} />
        <Spacing variant={'cg-card-detail-space-between-text'} />
        <Typography value={subtitle} variant={TypographyStyle.BODY1} />
        <Spacing variant={'cg-card-detail-space-between-text'} />
        <Typography value={detail} variant={TypographyStyle.BODY1}/>
    </div>

export default CardDetail