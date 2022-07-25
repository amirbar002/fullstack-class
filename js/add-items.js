import { CONSTANTS } from "./constans.js"
import { orderListBackgroud, gatOddAndEvenItem, elemenstEventListener} from "./utils.js"
import { removeItem } from "./remove-items.js"

export function addItem(event){
 event.preventDefault()
 const list = document.querySelector(`${CONSTANTS.HASHTAG}${CONSTANTS.IDS.LIST}`)
const li = document.createElement(CONSTANTS.TAGS.LI)
const i = document.createElement(CONSTANTS.TAGS.I)
li.className = CONSTANTS.CLASSES.LIST_GROUP_ITEM
i.className = `${CONSTANTS.CLASSES.BI} ${CONSTANTS.CLASSES.BI_TRASH}  ${CONSTANTS.CLASSES.FLOAT_END}`

const inputValue = document.querySelector(`${CONSTANTS.HASHTAG}${CONSTANTS.IDS.ITEM_NAME}`).value.trim()
if(!inputValue){
    alert(CONSTANTS.TYPE_ITEM_NAME_MASSAGE)
    return
}
const liInnerText = document.createTextNode(inputValue)
li.append(liInnerText,i)
list.appendChild(li)

orderListBackgroud(
    `${CONSTANTS.DOT}${CONSTANTS.CLASSES.LIST_GROUP_ITEM}`,
    CONSTANTS.CLASSES.SUCCESS
    )//`.list-group-item`

    
   const trashItems = gatOddAndEvenItem(`${CONSTANTS.DOT}${CONSTANTS.CLASSES.BI_TRASH}`).all
   elemenstEventListener(trashItems,CONSTANTS.EVENT_TYPES.CLICK, removeItem)


}




