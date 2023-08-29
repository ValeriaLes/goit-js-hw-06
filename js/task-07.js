const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')


function textSizeChange () {
  
    textEl.style.fontSize = inputEl.value + "px"

}

textSizeChange()

inputEl.addEventListener('input', textSizeChange)
