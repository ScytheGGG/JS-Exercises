function counterIncrease() {
        var numberElement = document.getElementsByClassName('counterNumber')[0];
        var number = parseFloat(numberElement.innerText);
    
        number = number + 1;
        numberElement.innerText = number;
}