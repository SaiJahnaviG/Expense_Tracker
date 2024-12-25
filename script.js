const expenseForm = document.getElementById('expenseForm');
const expenseTable = document.getElementById('expenseTable');
const totalExpense = document.getElementById('totalExpense');

let expenses = [];

function updateExpenseTable() {
    expenseTable.innerHTML = '';
    let total = 0;
    expenses.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.category}</td>
            <td>$${expense.amount.toFixed(2)}</td>
        `;
        expenseTable.appendChild(row);
        total += expense.amount;
    });
    totalExpense.textContent = `Total: $${total.toFixed(2)}`;
}

expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const category = document.getElementById('expenseCategory').value;

    if (name && !isNaN(amount)) {
        expenses.push({ name, amount, category });
        updateExpenseTable();
        expenseForm.reset();
    }
});
