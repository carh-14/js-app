function crearRecordatorio() {
    var divRec = document.getElementById("recordatorioContent");
    var divNewRec = document.createElement("div");
    var txtAreaValue = document.getElementById("txtRecordatorio").value;
    var pNewRec = document.createElement("label");
    var txtNewRec =document.createTextNode(txtAreaValue);
    pNewRec.appendChild(txtNewRec);
    divNewRec.classList.add("divAside");
    divNewRec.appendChild(pNewRec);
    divRec.appendChild(divNewRec);

    document.getElementById("txtRecordatorio").value = '';
}

function crearEntrada() {
    var divEntrada = document.getElementById("entradaContent");
    var sectionNewEntrada = document.createElement("section");
    var pNewTitulo = document.createElement("p");
    var pNewContenido = document.createElement("p");

    var txtEntTitulo = document.getElementById("txtEntTitulo").value;
    var txtEntContenido =  document.getElementById("txtEntContenido").value;
    
    var tituloTxtContent = document.createTextNode(txtEntTitulo);
    var contenidoTxtContent = document.createTextNode(txtEntContenido);

    pNewTitulo.appendChild(tituloTxtContent);
    pNewContenido.appendChild(contenidoTxtContent);

    sectionNewEntrada.classList.add("seccionArt");
    sectionNewEntrada.appendChild(pNewTitulo);
    sectionNewEntrada.appendChild(pNewContenido);
    divEntrada.appendChild(sectionNewEntrada);

    document.getElementById("txtEntTitulo").value = '';
    document.getElementById("txtEntContenido").value = '';
}