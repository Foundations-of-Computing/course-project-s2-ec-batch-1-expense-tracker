function addEntry() {
    const date = document.getElementById('DateOfExpense').value; /*Finds the value of an HTML element by referencing its ID and stores it in a variable.*/
    const time = document.getElementById('TimeOfExpense').value;
    const category = document.getElementById('Category').value;
    const type = document.querySelector('input[name="type"]:checked').value;
    const amount = document.getElementById('Expense_Income').value;

    const table = document.getElementById('cashFlowTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = date; /*Modifies HTML content to add user given data to the table.*/
    cell2.innerHTML = time;
    cell3.innerHTML = category;
    cell4.innerHTML = (type === 'expense' ? '-' : '+') + ' ₹' + amount;
    cell5.innerHTML = '<button onclick="removeEntry(this)">Remove</button>';

    document.getElementById('cashFlowForm').reset(); /*Fields are cleared to accept another set of inputs from the user.*/
}

function removeEntry(button) { /*Removes a row from the table when the button is clicked.*/
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}