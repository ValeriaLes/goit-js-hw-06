const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

const onInputChange = function (event) {
    
    event.currentTarget.value
 nameLabel.textContent = event.currentTarget.value.trim()

 if (event.currentTarget.value.trim() === '') {
    nameLabel.textContent = "Anonymus"
 }
 

}

input.addEventListener('input', onInputChange)

