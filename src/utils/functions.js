import { ThemeColors } from "../theme/colors"
import { statusType } from "./constants"

const setColor = (status) => {
    switch (status) {
        case statusType.COMPLATED:
            return ThemeColors.green

        case statusType.INPROGRESS:
            return ThemeColors.blue

        case statusType.INREVIEW:
            return ThemeColors.pink

        case statusType.ONHOLD:
            return ThemeColors.yellow

        default: return ThemeColors.white



    }

}

export { setColor }