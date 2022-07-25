import {gatOddAndEvenItem} from "./utils.js"
import {CONSTANTS} from "./constans.js"

 export function filterItems(event){
    const filterText = event.target.value.toLowerCase().trim()
    const listItem =  gatOddAndEvenItem(`${CONSTANTS.DOT}${CONSTANTS.CLASSES.LIST_GROUP_ITEM}`).all
    for(const item of listItem){
        const itemText = item.innerText.toLowerCase()
        if(!itemText.startsWith(filterText)){
            item.style.display = CONSTANTS.DISPLAY_STYLE.NONE
        }else{
            item.style.display = CONSTANTS.DISPLAY_STYLE.BLOCK
        }
    }
    

}




// document.querySelector(`${CONSTANTS.HASHTAG}${CONSTANTS.IDS.FILTER}`).addEventListener(CONSTANTS.EVENT_TYPES.KEYUP, filterItems)
