function loadTransactions() {
    let transactions =
    JSON.parse(localStorage.getItem('transactions')) || [];
    let list =
    document.getElementById('transactionList');
    list.innerHTML = "";
    transactions.forEach(t => {
        let row = `
            <tr>
                <td>${t.type}</td>
                <td>$${t.amount}</td>
            </tr>
        `;
        list.innerHTML += row;
    });
}

if(document.getElementById('transactionList')){
    loadTransactions();
}
