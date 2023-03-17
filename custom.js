document.getElementById('submit-btn').addEventListener('click',function(){
    const userEmailField = document.getElementById('email-field')
    const email =  userEmailField.value;
    const userPasswordField = document.getElementById('password-field')
    const password =  userPasswordField.value;
    // console.log(email,password);
    if(email === 'admin@.com' && password === 'admin'){
       window.location.href = 'bank.html'
    }
    else{
        alert('Invalid user');

    }
})