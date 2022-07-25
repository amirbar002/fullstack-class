import {CONSTANTS} from "./constants.js"

function getOddEvennum(selector,className){

    const all = document.querySelector(selector)
    const ood = document.querySelector(`${selector}${CONSTANTS.COLUMN}${CONSTANTS.PSEUDO_CLASSES.ODD}`)
    const even = document.querySelector(`${selector}${CONSTANTS.COLUMN}${CONSTANTS.PSEUDO_CLASSES.EVEN}`)

    return{
        all: all,
        odd: odd,
        even: even
    }

}

export{getOddEvennum}