import React from 'react'

interface ISpacing {
    variant: string
}

const Spacing: React.FC<ISpacing> = ({ variant }) => 
    <div className={variant}></div>

export default Spacing