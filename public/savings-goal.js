document.getElementById('savings-goal-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const targetAmount = document.getElementById('targetAmount').value;
    const deadline = document.getElementById('deadline').value;
    
    const response = await fetch('/api/transactions/savings-goal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetAmount, deadline })
    });
    
    const result = await response.json();
    if (response.ok) {
        alert('Savings goal set successfully');
    } else {
        alert('Error setting savings goal: ' + result.message);
    }
});