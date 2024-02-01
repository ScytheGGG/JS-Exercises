function lc() {
        const amount = document.getElementById('amount');
        const interest = document.getElementById('interest');
        const years = document.getElementById('years');
        const lcMonthly = document.getElementById('lcMonthly');
        const lcTotal = document.getElementById('lcTotal');
        const lcInterest = document.getElementById('lcInterest');
    
        const principle = parseFloat(amount.value);
        const calculatedInterest = parseFloat(interest.value) / 100 / 12;
        const calculatedPayments = parseFloat(years.value) * 12;
    
        // Calculate monthly payments
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principle * x * calculatedInterest) / (x - 1);
    
        if (isFinite(monthly)) {
            lcMonthly.innerHTML = 'Monthly Payment: $' + monthly.toFixed(2);
            lcTotal.innerHTML = 'Total Payment: $' + (monthly * calculatedPayments).toFixed(2);
            lcInterest.innerHTML = 'Total Interest: $' + ((monthly * calculatedPayments) - principle).toFixed(2);
        } else {
            alert('Please check your inputs');
        }
}
    