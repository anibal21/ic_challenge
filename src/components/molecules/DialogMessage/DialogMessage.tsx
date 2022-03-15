import React from 'react'
import TypographyStyle from '../../../utils/enums/TypographyStyle'
import Typography from '../../atoms/Typography/Typography'

interface IDialogMessage {
    text: string
    severity: string
}

const DialogMessage: React.FC<IDialogMessage> = ({ text, severity }) =>
    <div className={`cg-dialog-container font-color-dark ${severity}`}>
        <Typography value={text} variant={TypographyStyle.BODY1} />
    </div>


export default DialogMessage