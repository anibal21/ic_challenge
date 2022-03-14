import React from 'react'

interface ICardImage {
    src: string
}

const Text = {
    description: 'Profile Image'
}

const CardImage: React.FC<ICardImage> = ({ src }) =>
    <img alt={Text.description} src={src} className={'cg-card-image'} loading="lazy"/>

export default CardImage