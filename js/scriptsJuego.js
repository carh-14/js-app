function generarNumero() {
    var numRandom = randomInt();
    document.getElementById("randomNum").value = numRandom;
    document.getElementById("num1").disabled = false;
    document.getElementById("btnP1").disabled = false;
    document.getElementById("numSecreto").innerText = "XXX";
    valoresDefault();
}

function randomInt() {
    return Math.floor(Math.random() * 10);
}

function validarIntento(nIntento) {
    var txtInt;
    var btnInt;
    var imgRes;
    var sigValInt;
    var sigBtnInt;
    var randomN;
    var resultado = "Perdiste";
    switch(nIntento){
        case 1:
             txtInt = "num1";
             btnInt = "btnP1";
             imgRes = "imgRes1";
             sigValInt = "num2";
             sigBtnInt = "btnP2";
        break;
        case 2:
             txtInt = "num2"
             btnInt = "btnP2";
             imgRes = "imgRes2"
             sigValInt = "num3"
             sigBtnInt = "btnP3"
        break;
        case 3:
             txtInt = "num3"
             btnInt = "btnP3";
             imgRes = "imgRes3"
             sigValInt = ""
             sigBtnInt = ""
        break;
        default:
             txtInt = ""
             imgRes = ""
             sigValInt = ""
             sigBtnInt = ""
    }
    randomN = document.getElementById("randomNum").value;
    if (txtInt != "" && btnInt !== "" && imgRes != ""){
        var txtNIntento = document.getElementById(txtInt).value;
        if(txtNIntento == randomN) {
            var resultado ="Ganaste";
            document.getElementById(imgRes).src = "../img/correct.png";
            document.getElementById("resultadoInt").innerText = resultado;
            document.getElementById("resultadoInt").classList.add("resIntGanador");
            document.getElementById("numSecreto").innerText = randomN;
        } else {
            document.getElementById(imgRes).src = "../img/cancel.png";
        }
        
        document.getElementById(txtInt).disabled = true;
        document.getElementById(btnInt).disabled = true;
    }

    if (sigValInt != "" && sigBtnInt != "" && resultado == "Perdiste") {
        document.getElementById(sigValInt).disabled = false;
        document.getElementById(sigBtnInt).disabled = false;
    }

    if(nIntento == 3 && resultado=="Perdiste") {
        document.getElementById("resultadoInt").innerText = resultado;
        document.getElementById("resultadoInt").classList.add("resIntPerdedor");
        document.getElementById("numSecreto").innerText = randomN;
    }

}

function valoresDefault() {
    var classLabel = document.getElementById("resultadoInt").classList.value;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("resultadoInt").innerText = "-";
    if (classLabel != ""){
        document.getElementById("resultadoInt").classList.remove(classLabel);
    }
    document.getElementById("imgRes1").src = "../img/question.png";
    document.getElementById("imgRes2").src = "../img/question.png";
    document.getElementById("imgRes3").src = "../img/question.png";
}