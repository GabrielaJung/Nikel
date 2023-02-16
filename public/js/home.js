const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []
}


document.getElementById("button-logout").addEventListener("click", logout);

checkLogged();


// ---------------------------------------------------------------- 21:20 


// ---------- FUNCTIONS ---------- //

function checkLogged (){
    if (session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if (!logged){
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if (dataUser){
        data = JSON.parse(dataUser);
    }
    console.log(data);
}

function logout (){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}