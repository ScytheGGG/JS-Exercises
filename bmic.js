function bmic() {
        var weight = parseFloat(document.getElementById('bmicWeight').value);
        var height = parseFloat(document.getElementById('bmicHeight').value);
    
        if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
            alert("Provide valid values for Weight and Height!");
        } else {
            let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
            if (bmi < 18.6) {
                document.getElementById('bmicAnswer').innerHTML = "You are underweight: " + bmi;
            } else if (bmi >= 18.6 && bmi < 24.9) {
                document.getElementById('bmicAnswer').innerHTML = "You are normal weight: " + bmi;
            } else {
                document.getElementById('bmicAnswer').innerHTML = "You are overweight: " + bmi;
            }
        }
}
    