//Definición de las funciones principales y argumentos callback

// Punto 1
function showMessageWithCallback(message, callback) {
    //console.clear()
    callback(message);
}

// Punto 2
function checkTypeAndPrintValue(variable, callback) {
    //console.clear()
    const type = typeof variable;
    callback(`Tipo de dato: ${type}, Valor: ${variable}`);
}

// Punto 3
function performOperation(num1, num2, callback) {
    //console.clear()
    return callback(num1, num2);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

// Punto 4
function transformStringCase(inputString, callback) {
    //console.clear()
    return callback(inputString);
}

const toUpperCase = (str) => str.toUpperCase();
const toLowerCase = (str) => str.toLowerCase();

// Punto 5
function filterTimeArray(timeArray, callback) {
    //console.clear()
    const filteredArray = timeArray.filter(time => time > 120);
    callback(filteredArray);
}



// Agregar manejadores de eventos a los botones después de definir las funciones


document.getElementById("btnPunto1").addEventListener("click", function () {
    showMessageWithCallback("Este es un mensaje de advertencia.", console.warn);
    showMessageWithCallback("Este es un mensaje informativo.", console.info);
    showMessageWithCallback("Este es un mensaje de registro.", console.log);
});

document.getElementById("btnPunto2").addEventListener("click", function () {
    checkTypeAndPrintValue(42, console.log);
    checkTypeAndPrintValue("Hola, mundo", console.log);
    checkTypeAndPrintValue(true, console.log);
});

document.getElementById("btnPunto3").addEventListener("click", function () {
    console.log(performOperation(10, 5, suma));
    console.log(performOperation(10, 5, resta));
    console.log(performOperation(10, 5, multiplicacion));
    console.log(performOperation(10, 5, division));
});

document.getElementById("btnPunto4").addEventListener("click", function () {
    console.log(transformStringCase("PejeLagarto", toLowerCase));
    console.log(transformStringCase("PejeLagarto", toUpperCase));
});

document.getElementById("btnPunto5").addEventListener("click", function () {
    const timeArray = [120, 80, 200, 100, 140, 160];
    filterTimeArray(timeArray, console.log);
});

document.getElementById("clrConsole").addEventListener("click", function () {
    console.clear()
});
