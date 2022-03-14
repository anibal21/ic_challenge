import React from 'react'
import Typography from '../../atoms/Typography/Typography'
import { TypographyStyle } from './../../../utils/enums/enums'

interface IHeader {
    title: string;
}

const Header: React.FC<IHeader> = ({ title }) =>
    <div className={'cg-header-container'}>
        <Typography value={title} variant={TypographyStyle.H1} />
    </div>
    
export default Header
