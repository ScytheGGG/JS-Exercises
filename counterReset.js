function counterReset() {
        var numberElement = document.getElementsByClassName('counterNumber') [0];
        var number = parseFloat(numberElement.innerText);

        number = 0;

        numberElement.innerText = number;
}