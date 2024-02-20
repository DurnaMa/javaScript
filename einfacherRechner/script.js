function add(){
    let myFirstNumber = +document.getElementById('number1').value;
    let mySecondNumner = +document.getElementById('number2').value;
    let result = myFirstNumber + mySecondNumner;

    document.getElementById('headlien').innerHTML = `Das Ergebnise ist ${result}`;
}