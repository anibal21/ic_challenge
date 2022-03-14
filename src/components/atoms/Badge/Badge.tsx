import React from 'react'

interface IBadge {
    number: string,
    classification: string
}

const Badge: React.FC<IBadge> = ({ number, classification }) =>
    <div className={`cg-badge-container ${classification}`}>
        <span>{number}</span>
    </div>

export default Badge