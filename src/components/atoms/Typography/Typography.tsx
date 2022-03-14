import React from 'react'

interface ITypography {
    value: string;
    variant: string;
}

const Typography: React.FC<ITypography> = ({ value, variant }) => {
    return <span className={variant}>{value}</span>
}
    

export default Typography