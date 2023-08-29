const registerForm = document.querySelector('.login-form')



function onFormSubmit(event) {
    event.preventDefault();
    
const form = event.currentTarget;

if (form.elements.email.value === '' || form.elements.password.value === '') {
    const message = "Всі поля повинні бути заповнені."
    alert(message)
    return
}
const email = form.elements.email.value
const password = form.elements.password.value

const registerData = {
    email, 
    password

}
console.log(registerData)
registerForm.reset()
}



registerForm.addEventListener('submit', onFormSubmit);