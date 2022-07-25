import {CONSTANTS} from "./constans.js" 
import {elemenstEventListener, gatOddAndEvenItem, orderListBackgroud} from "./utils.js"
import {filterItems} from "./filter.js"
import {addItem} from "./add-items.js"
import {removeItem} from "./remove-items.js"

orderListBackgroud(
    `${CONSTANTS.DOT}${CONSTANTS.CLASSES.LIST_GROUP_ITEM}`,
    CONSTANTS.CLASSES.SUCCESS
    )//`.list-group-item`

    document
    .querySelector(`${CONSTANTS.HASHTAG}${CONSTANTS.IDS.FILTER}`)
    .addEventListener(CONSTANTS.EVENT_TYPES.KEYUP, filterItems)

   
   document.querySelector(`${CONSTANTS.HASHTAG}${CONSTANTS.IDS.ADD_ITEM}`).addEventListener(CONSTANTS.EVENT_TYPES.CLICK,addItem)
   
   

   const trashItems = gatOddAndEvenItem(`${CONSTANTS.DOT}${CONSTANTS.CLASSES.BI_TRASH}`).all
   elemenstEventListener(trashItems,CONSTANTS.EVENT_TYPES.CLICK, removeItem)

