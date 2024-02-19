// Die Funktion greet wir auf gerufen, zeitgleich wird die variavle den "x" zugewisen und "x" wider durch den Namen ersetzt "${x}"

// function greet(x) {
//     document.getElementById(
//         "greeting"
//     ).innerHTML = `Hallo ${x} wie geht es dir`;
// }

function greetFromTextField() {
    let name = document.getElementById('nameField').value;
    greet(name);
}

function greet(x) {
    document.getElementById('greeting').innerHTML = `Hallo ${x}, wie geht es dir?`
}