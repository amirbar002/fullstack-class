const submit = document.querySelector(`#submit`)
const textarae = document.querySelector(`#text-area`)
const divmain = document.querySelector(`#main`)
const time = document.querySelector(`#time`)
const date = document.querySelector(`#date`)
submit.addEventListener(`click`, back)

function back(event) {
  event.preventDefault()
  const divtwo = document.createElement(`div`)
  const icon = document.createElement(`button`)
  const datetwo = document.createElement(`p`)
  const textaraetwo = document.createElement(`p`)
  const timetwo = document.createElement(`p`)

  divtwo.className = `class-div`
  datetwo.className = `class-date`
  textaraetwo.className = `class-text`
  timetwo.className = `class-time`

  icon.classList.add('bi', 'bi-trash', 'trash')

  textaraetwo.innerText = textarae.value
  datetwo.innerText = date.value
  timetwo.innerText = time.value

  divtwo.append(icon, textaraetwo, datetwo, timetwo)
  divmain.append(divtwo)


                                                                        


}
                                         


