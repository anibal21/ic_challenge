import BadgeClassificationStyle from "../enums/BadgeClassificationStyle"

export const ClassificationByRatio = ( ratio: number ) =>
    ratio === 0                         ? BadgeClassificationStyle.RED
    : ratio > 0 && ratio < 0.25         ? BadgeClassificationStyle.YELLOW
    : ratio >= 0.25 && ratio < 0.75     ? BadgeClassificationStyle.GREEN
    : /* Otherwise */                     BadgeClassificationStyle.BLUE

