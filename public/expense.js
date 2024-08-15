document.getElementById('expense-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    
    const response = await fetch('/api/transactions/expense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, date, category })
    });
    
    const result = await response.json();
    if (response.ok) {
        alert('Expense added successfully');
    } else {
        alert('Error adding expense: ' + result.message);
    }
});