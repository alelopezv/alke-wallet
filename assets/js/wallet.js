function getBalance() {
    return parseInt(localStorage.getItem('balance') || '0');
}

function updateBalance(newBalance) {
    localStorage.setItem('balance', newBalance);
}

function deposit() {
    let amount = parseInt(
    document.getElementById('amount').value
    );
    if(isNaN(amount) || amount <= 0){
        alert("Ingrese un monto válido");
        return;
    }
    let balance = getBalance();
    balance += amount;
    updateBalance(balance);
    saveTransaction("Depósito", amount);
    alert("Depósito realizado con éxito");

    setTimeout(()=>{
        window.location.href = "menu.html";
    },1000);
}

function sendMoney() {
    let amount = parseInt(document.getElementById('amount').value);
    let balance = getBalance();

    if(amount > 0 && amount <= balance){
        balance -= amount;
        updateBalance(balance);
        saveTransaction("Envío", amount);
        alert("Transferencia realizada");
        window.location.href = "menu.html";
    } else {
    alert("Monto inválido o saldo insuficiente");
    }
}

function saveTransaction(type, amount){

    let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

    let newTransaction = {
        type: type,
        amount: amount
    };

    transactions.push(newTransaction);

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}

function addContact(){
    let name = document.getElementById("newContact").value;
    if(name.trim() === ""){
        alert("Ingrese un nombre");
        return;
    }
    let contacts =
    JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(name);
    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );
    loadContacts();
    document.getElementById("newContact").value = "";
}

function loadContacts(){
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    let datalist = document.getElementById("contacts");
    if(!datalist) return;
    datalist.innerHTML = "";
    contacts.forEach(c => {
        datalist.innerHTML +=
        `<option value="${c}">`;
    });

}

loadContacts();