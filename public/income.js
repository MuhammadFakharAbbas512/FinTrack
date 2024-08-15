document.getElementById('income-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    
    const response = await fetch('/api/transactions/income', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, date, category })
    });
    
    const result = await response.json();
    if (response.ok) {
        alert('Income added successfully');
    } else {
        alert('Error adding income: ' + result.message);
    }
});