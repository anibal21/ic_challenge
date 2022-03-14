import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import React from 'react'

interface IIcon {
    name: string,
}

const Icon: React.FC<IIcon> = ({ name }) =>
    <FontAwesomeIcon icon={solid('magnifying-glass')} />

export default Icon