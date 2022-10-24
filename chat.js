var mensagens1 = []
var mensagens2 = []

//////////////////////////////////////////////////////////

function envio1() {
    var msg1 = document.getElementById("mensagemUsuario1").value


    document.getElementById("listaDeMensagens").append(msg1)

    msg1.push(mensagens1)
}

//////////////////////////////////////////////////////////

function envio2() {
    var msg2 = document.getElementById("mensagemUsuario2").value;

    var li = document.createElement("li");
    li.innerText = msg2;
    document.getElementById("listaDeMensagens").append(li);


    mensagens2.push(msgYoda);
}

