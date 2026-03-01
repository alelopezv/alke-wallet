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
    window.location.href = "menu.html";
}

function sendMoney() {
    let amount = parseInt(document.getElementById('amount').value);
    let balance = getBalance();

    if(amount > 0 && amount <= balance){
        balance -= amount;
        updateBalance(balance);
        saveTransaction("Envío", amount);
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