import { orderListBackgroud } from "./utils.js"
import { CONSTANTS } from "./constans.js"

 export function removeItem(event){
     if(!confirm(CONSTANTS.MAKE_SURE_MASSAGE)){
         return
     }
    const li = event.target.parentElement
    const list = li.parentElement
    list.removeChild(li)

    orderListBackgroud(
        `${CONSTANTS.DOT}${CONSTANTS.CLASSES.LIST_GROUP_ITEM}`,
        CONSTANTS.CLASSES.SUCCESS
        )//`.list-group-item`
    
    
    
}

