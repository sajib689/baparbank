document.getElementById('btn-update').addEventListener('click', function() {
    const userEmail = document.getElementById('user-email');
    const userFiled = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const userPasswordFiled = userPassword.value;
    if (userFiled === 'sontan@baap.com' && userPasswordFiled === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('Wrong Email or Password')
    }
})