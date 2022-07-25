import { CONSTANTS} from "./constans.js"

function orderListBackgroud(selector,className){
    const listOddItem = gatOddAndEvenItem(selector).odd
    const listEvenItem = gatOddAndEvenItem(selector).even
    addClass(listOddItem,className)
    removeClass(listEvenItem,className)
}

 function gatOddAndEvenItem(selector){
    const all = document.querySelectorAll(selector)
    const odd = document.querySelectorAll(`${selector}${CONSTANTS.COLUMN}${CONSTANTS.PSEUDO_CLASSES.ODD}`)
    const even = document.querySelectorAll(`${selector}${CONSTANTS.COLUMN}${CONSTANTS.PSEUDO_CLASSES.EVEN}`)
    return {
        all : all,
        odd : odd,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        even : even
    }
}

function addClass(elements, className){
    for(const elemenst of elements){
        elemenst.classList.add(className)
    }
 }

function removeClass(elements, className){
    for(const elemenst of elements){
        elemenst.classList.remove(className)
    }
 }



 function elemenstEventListener(elements, eventType , callback){
    
     for(const elemenst of elements)
     elemenst.addEventListener(eventType,callback)
 }

export {orderListBackgroud, gatOddAndEvenItem, elemenstEventListener}




