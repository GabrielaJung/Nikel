
const myModal = new bootstrap.Modal("#register-modal");


document.getElementById("signup-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("signup-input-email").value;
    const password = document.getElementById("signup-input-password").value;    

    if(email.length < 5){
        alert("Utilize um e-mail válido.");
        return;
    }

    if(password.length < 8){
        alert("Crie uma senha com pelo menos 8 dígitos.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    })

    myModal.hide();
    alert("Conta criada com sucesso!")
});

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}
