if(!localStorage.getItem("user")){
    window.location.href = "login.html";
}

function goTo(page){
    window.location.href = page;
}

function logout(){
    localStorage.clear();
    window.location.href = "login.html";
}

if(document.getElementById("balance")){
    document.getElementById("balance").textContent = getBalance().toLocaleString();
}