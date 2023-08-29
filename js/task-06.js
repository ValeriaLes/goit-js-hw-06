const input = document.querySelector('#validation-input');



const symbolLength = function (event) {
  
    const inputValue = event.currentTarget.value.trim()
    
    if (Number.parseInt(input.dataset.length) === inputValue.length) {
    
        input.classList.remove("invalid")
       input.classList.add("valid")
       

    }
    else if (Number.parseInt(input.dataset.length) !== inputValue.length) {
        
        input.classList.remove("valid")
        input.classList.add("invalid")
    }
}

input.addEventListener('blur', symbolLength)