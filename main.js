let semillaInputMixto = document.querySelector(".semillaMixto");
let parameterAInputMixto = document.querySelector(".parameterAMixto");
let parameterCInput = document.querySelector(".parameterC");
let parameterMInputMixto = document.querySelector(".parameterMixto");
let semillaInputMulti = document.querySelector(".semillaMulti");
let parameterAInputMulti = document.querySelector(".parameterAMulti");
let parameterMInputMulti = document.querySelector(".parameterMulti");
let subtotal;
let residuo;
let numAleatorio;
let x;
const calcularMixto = document.querySelector("#calcular-mixto");
const calcularMulti = document.querySelector("#calcular-multi");
let formulaMixto = document.querySelector(".formula-mixto");
let formulaMulti = document.querySelector(".formula-multi");
let loginBoxMixto = document.querySelector("#login-boxMixto");
let loginBoxMulti = document.querySelector("#login-boxMulti");
const tableMulti = document.querySelector("#table-multi");
const tableMixto = document.querySelector("#table-mixto");
const buttonMulti = document.querySelector(".button-multi");
const buttonMixto = document.querySelector(".button-mixto");
const containerMulti = document.querySelector(".container-multi");
const containerMixto = document.querySelector(".container-mixto");
const errorMixtoM = document.querySelector(".errorMixtoM");
const errorC = document.querySelector(".errorC");
const errorAMixto = document.querySelector(".errorAMixto");
const errorMultiM = document.querySelector(".errorMultiM");
const errorAMulti = document.querySelector(".errorAMulti");
const errorSemillaMulti = document.querySelector(".errorSemillaMulti");
const errorSemillaMixto = document.querySelector(".errorSemillaMixto");
const numAleatorioArray = [];
const calcularAleatorio = document.querySelector("#calcular-aleatorio");

let parameterminimo = document.querySelector(".minimo");
let parametermaximo = document.querySelector(".maximo");


function printErrorMultiA(e) {

    if (errorAMulti != "errorAMulti") {
        errorAMulti.classList.remove("errorSpan");
    }
    let a = parseInt(parameterAInputMulti.value);
    if (((a - 3) % 8 == 0) || (a - 5) % 8 == 0 || parameterAInputMulti.value == "") {
        errorAMulti.textContent = "";
    }
    else if (a <= 0) {
        errorAMulti.textContent = "";
        errorAMulti.classList.add("errorSpan");
        errorAMulti.textContent = "a deber ser mayor que 0";
    }
    else {
        errorAMulti.textContent = "";
        errorAMulti.classList.add("errorSpan");
        errorAMulti.textContent = "Forma de a: 3 + 8k o 5 + 8k";
    }
}

function printErrorMultiM(e) {
    if (errorMultiM.className != "errorMultiM") {
        errorMultiM.classList.remove("errorSpan");
    }
    let m = parseInt(parameterMInputMulti.value);
    let mCorrect = false;
    while (m >= 2) {
        console.log(m);
        if (m == 2) {
            mCorrect = true;
            break;
        }
        else {
            m /= 2;
        }

    }
    if (mCorrect == true || parameterMInputMulti.value == "") {
        errorMultiM.textContent = "";
    }
    else {
        errorMultiM.classList.add("errorSpan");
        errorMultiM.textContent = "Debe ser de base 2";
    }

}

function printErrorMultiSemilla(e) {
    if (errorSemillaMulti.className != "errorSemillaMulti") {
        errorSemillaMulti.classList.remove("errorSpan");
    }
    let semilla = parseInt(semillaInputMulti.value);
    if (semilla % 2 == 0) {
        errorSemillaMulti.classList.add("errorSpan");
        errorSemillaMulti.textContent = "Debe ser impar";
    }
    else {
        errorSemillaMulti.textContent = "";
    }
}


function errorMixto(e) {

    let contadorPrimo = 0;
    let multiploDePrimos = "true";
    const factoresPrimos = [];
    let semilla = parseInt(semillaInputMixto.value);
    let a = parseInt(parameterAInputMixto.value);
    let m = parseInt(parameterMInputMixto.value);
    let gcd = 1;
    let c = parseInt(parameterCInput.value);
    let max;
    let min;
    if (a <= 0) {
        errorAMixto.style.display = "flex";
        errorAMixto.textContent = "Debe ser mayor que 0";
        errorAMixto.classList.add("errorSpan");
    }
    else {
        errorAMixto.textContent = ""
    }
    if (c <= 0) {
        errorC.style.display = "flex";
        errorC.textContent = "Debe ser mayor que 0";
        errorC.classList.add("errorSpan");
    }
    else {
        errorC.textContent = ""
    }
    if (m <= 0) {
        errorMixtoM.style.display = "flex";
        errorMixtoM.textContent = "Debe ser mayor que 0";
        errorMixtoM.classList.add("errorSpan");
    }
    else {
        errorMixtoM.textContent = "";
    }
    if (semilla <= 0) {
        errorSemillaMixto.style.display = "flex";
        errorSemillaMixto.textContent = "Debe ser mayor que 0";
        errorSemillaMixto.classList.add("errorSpan");
    }
    else {
        errorSemillaMixto.textContent = "";
    }
    if (m <= c || m <= a || m <= semilla) {
        errorMixtoM.style.display = "flex";
        errorMixtoM.textContent = "M debe ser el mayor";
        errorMixtoM.classList.add("errorSpan");
    }
    else {
        errorMixtoM.textContent = "";
        min = c;
        max = m;
        while (max > min) {
            let r = max % min;
            if (r == 0) {
                gcd = min;
                break;
            }
            else {
                max = min;
                min = r;
            }
        }
        if (gcd == 1 || parameterMInputMixto.value == "") {
            errorMixtoM.textContent = "";
        }
        else {
            errorMixtoM.style.display = "flex";
            errorMixtoM.textContent = "c y m deben ser PESI";
            errorMixtoM.classList.add("errorSpan");
        }
    }
    for (let i = 1; i <= m; i++) {
        contadorPrimo = 0;
        if (m % i == 0) {
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    contadorPrimo++;
                }
            }
            if (contadorPrimo <= 2) {
                factoresPrimos.push(i);
            }
        }
    }
    factoresPrimos.forEach(factorPrimo => {
        console.log(factorPrimo);
        if ((a - 1) % factorPrimo != 0) {
            multiploDePrimos = false;
        }
    })
    if (multiploDePrimos == false && parameterAInputMixto.value != "") {
        errorAMixto.style.display = "flex";
        errorAMixto.textContent = "a - 1 debe ser múltiplo de los factores primos de m";
        errorAMixto.classList.add("errorSpan");
    }
    else {
        if (m % 4 == 0 && (a - 1) % 4 != 0 && parameterAInputMixto.value != "") {
            errorAMixto.style.display = "flex";
            errorAMixto.textContent = "a - 1 debe ser multiplico de 4";
            errorAMixto.classList.add("errorSpan");
        }
        else {
            if (a >= 0) {
                errorAMixto.textContent = "";
            }
        }
    }

}

function generarAleatorio() {
    var min = parseInt(parameterminimo.value);
    var max = parseInt(parametermaximo.value);
    //Generar un número entero dentro de un rango
    var x = Math.floor(Math.random() * (max - min + 1) + min);
    //Generar un número dentro de un rango
    //Math.random()*(max - min)+min;
    console.log(x);
    console.log(min);
    console.log(max);
    alert(`El numero generado es: ${x}`);
    //document.getElementById("result").innerHTML = "Número aleatorio generado: " + x;
}


calcularAleatorio.addEventListener("click", generarAleatorio);
function createRowTitles(cTitle) {
    const filaTitle = document.createElement("tr");
    const nTitle = document.createElement("th");
    const xTitle = document.createElement("th");
    const aTitle = document.createElement("th");
    const mTitle = document.createElement("th");
    const subTotalTitle = document.createElement("th");
    const residuoTitle = document.createElement("th");
    const aleatorioTitle = document.createElement("th");

    nTitle.textContent = "N°";
    xTitle.textContent = "x";
    aTitle.textContent = "a";
    mTitle.textContent = "m";

    subTotalTitle.textContent = "Subtotal";
    residuoTitle.textContent = "Residuo";
    aleatorioTitle.textContent = "Aleatorio";

    filaTitle.append(nTitle);
    filaTitle.append(xTitle);
    filaTitle.append(aTitle);
    if (cTitle != null) {
        filaTitle.append(cTitle);
    }
    filaTitle.append(mTitle);
    filaTitle.append(subTotalTitle);
    filaTitle.append(residuoTitle);
    filaTitle.append(aleatorioTitle);
    cTitle != null ? tableMixto.append(filaTitle) : tableMulti.append(filaTitle);

}

function createRows(semilla, i, a, c, m, cIter) {
    const fila = document.createElement("tr");
    const iter = document.createElement("td");
    const xIter = document.createElement("td");
    const aIter = document.createElement("td");
    const mIter = document.createElement("td");
    const subTotalIter = document.createElement("td");
    const residuoIter = document.createElement("td");
    const numAleatorioIter = document.createElement("td");
    iter.textContent = i;
    aIter.textContent = a;
    mIter.textContent = m;
    if (c > 0) {
        if (i == 0) {
            xIter.textContent = semilla;
            x = semilla;
            subtotal = (a * semilla) + c;
        }
        else {
            x = residuo;
            xIter.textContent = x;
            subtotal = (a * x) + c;
        }
    }
    else {
        if (i == 0) {
            xIter.textContent = semilla;
            x = semilla;
            subtotal = (a * semilla);
        }
        else {
            x = residuo;
            xIter.textContent = x;
            subtotal = (a * x);
        }
    }

    residuo = subtotal % m;
    numAleatorio = residuo / m;
    numAleatorioArray.push(numAleatorio);
    subTotalIter.textContent = subtotal;
    residuoIter.textContent = residuo;
    numAleatorioIter.textContent = numAleatorio;
    fila.append(iter);
    fila.append(xIter);
    fila.append(aIter);
    if (c > 0) {
        fila.append(cIter);
    }
    fila.append(mIter);
    fila.append(subTotalIter);
    fila.append(residuoIter);
    fila.append(numAleatorioIter);
    if (c > 0) {
        tableMixto.append(fila);
    }
    else {
        tableMulti.append(fila)
    }
}

calcularMixto.addEventListener("click", generarAleatorioMixto);

function generarAleatorioMixto(e) {

    let semilla = parseInt(semillaInputMixto.value);
    let a = parseInt(parameterAInputMixto.value);
    let c = parseInt(parameterCInput.value);
    let m = parseInt(parameterMInputMixto.value);
    if (semilla > 0 && a > 0 && c > 0 && m > semilla && m > a && m > c) {
        containerMixto.style.display = "block";
        formulaMixto.style.display = "none";
        loginBoxMixto.style.display = "none";
        const cTitle = document.createElement("th");
        cTitle.textContent = "c";
        createRowTitles(cTitle);
        for (let i = 0; i < m; i++) {
            const cIter = document.createElement("td");
            cIter.textContent = c;
            createRows(semilla, i, a, c, m, cIter);
        }
    }


}

function generarAleatorioMulti(e) {

    let semilla = parseInt(semillaInputMulti.value);
    let a = parseInt(parameterAInputMulti.value);
    let m = parseInt(parameterMInputMulti.value);
    containerMulti.style.display = "block";
    formulaMulti.style.display = "none";
    loginBoxMulti.style.display = "none";
    createRowTitles(null);
    for (let i = 0; i < m / 4; i++) {
        createRows(semilla, i, a, 0, m, null);
    }

}

function generarNuevosNumerosMixto() {
    tableMixto.replaceChildren();
    errorSemillaMixto.textContent == "";
    errorMixtoM.textContent == "";
    errorC.textContent == "";
    errorAMixto.textContent = "";
    containerMixto.style.display = "none";
    formulaMixto.style.display = "flex";
    loginBoxMixto.style.display = "flex";
}

function generarNuevosNumerosMulti() {
    tableMulti.replaceChildren();
    containerMulti.style.display = "none";
    formulaMulti.style.display = "flex";
    loginBoxMulti.style.display = "flex";
}


calcularMulti.addEventListener("click", generarAleatorioMulti);
buttonMixto.addEventListener("click", generarNuevosNumerosMixto);
buttonMulti.addEventListener("click", generarNuevosNumerosMulti);
parameterMInputMixto.addEventListener("keyup", errorMixto);
parameterCInput.addEventListener("keyup", errorMixto);
parameterAInputMixto.addEventListener("keyup", errorMixto);
semillaInputMixto.addEventListener("keyup", errorMixto);
parameterAInputMulti.addEventListener("keyup", printErrorMultiA);
parameterMInputMulti.addEventListener("keyup", printErrorMultiM);
semillaInputMulti.addEventListener("keyup", printErrorMultiSemilla);

