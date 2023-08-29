const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueNumber = document.querySelector("#value");
let counterValue = 0;



incrementBtn.addEventListener("click", event => {
    
    counterValue +=1
    valueNumber.textContent = counterValue;
    
})



decrementBtn.addEventListener("click", event => {
    
    counterValue -=1
    valueNumber.textContent = counterValue;
   
})

