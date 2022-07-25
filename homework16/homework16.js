
const button = document.querySelector(`.button`)
button.addEventListener(`click`,buttonn)



function buttonn (event){
    console.log(event.type);
    
    
}


const sel = document.querySelector(`#sel`)

sel.addEventListener(`change`,option)


function option(change){
    console.log(`${change.target.value}`);

}

const bg = document.querySelector(`.con`)


 
bg.addEventListener(`mousemove`, wtf)


 function wtf(event){
    
    const x = event.clientX
    const y = event.clientY
    const xy = Math.abs(event.x-y)

    event.target.style.backgroundColor = `rgb(${x},${y},${xy})`
}


const text = document.querySelector(`#text`)


text.addEventListener(`keydonw`,key)

function key(event){
  countr++
  console.log(countr);
}


