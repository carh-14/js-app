function iniciarJuego2(){

    var nValor ="";
    nValor = generarNumero();
    var actualClass;
    var prevResultado = document.getElementById("valAciertos").innerText;
    var randomN = document.getElementById("nRandom").innerText;
    var imgValor = nValor.concat(".png");

    document.getElementById("imgJuego2").src = "../img/"+imgValor;
    document.getElementById("nRandom").textContent = nValor;

    if(prevResultado != "-"){
        var btns = document.querySelectorAll(".btnOpDisabled, .btnOpCorrecta, .btnOpIncorrecta");
        btns.forEach(element => {
            actualClass = element.classList.value;
            element.disabled = false;
            element.classList.replace(actualClass,"btnOpcion");
        });
        document.getElementById("valAciertos").innerText= "-";
    } 
    if(randomN == "-") {
        document.getElementById("loaderContainer").hidden = false;
        document.getElementById("resJuego2").hidden = false;
    }
    document.getElementById("comenzarJuego2").disabled = true;


}


function verificarOpcion(nOpcion){
    
    var nJuegoVal = document.getElementById("nRandom").textContent;
    var linkId = "opcion".concat(nOpcion);
    var classBtn = document.getElementById(linkId).classList.value;
    var btns2 = document.querySelectorAll(".btnOpcion");

    btns2.forEach(element => {
        element.disabled = true;
        element.classList.replace(classBtn,"btnOpDisabled");
    });


    if(nOpcion == nJuegoVal) {
        document.getElementById(linkId).classList.replace("btnOpDisabled","btnOpCorrecta");
        document.getElementById("valAciertos").innerText= "Ganaste";
    } else {
        document.getElementById(linkId).classList.replace("btnOpDisabled","btnOpIncorrecta");
        document.getElementById("valAciertos").innerText=  "Perdiste";

    }

    document.getElementById("comenzarJuego2").disabled = false;

}

function generarNumero() {
    var months = ["1", "2", "3", "4", "5"];

    var random = Math.floor(Math.random() * months.length);
    return months[random];
}
