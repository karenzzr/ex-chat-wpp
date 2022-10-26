var mensagens = [];

//////////////////////////////////////////////////////////

function envio1() {
    var msg1 = document.getElementById("mensagemUsuario1");

    var li = document.createElement("li");
    li.innerText = msg1.value;
    li.classList.add("mensagemUsuario1");

    document.getElementById("listaDeMensagens").append(li);

    var mensagem = {
        textoDaMensagem: msg1.value,
        quemEnviou: "usuario1"
    }

    mensagens.push(mensagem);
    localStorage.setItem("mensagens", JSON.stringify(mensagens));

    msg1.value = "";

};

//////////////////////////////////////////////////////////

function envio2() {
    var msg2 = document.getElementById("mensagemUsuario2");

    var li = document.createElement("li");
    li.innerText = msg2.value;
    li.classList.add("mensagemUsuario2");

    document.getElementById("listaDeMensagens").append(li);

    var mensagem = {
        textoDaMensagem: msg2.value,
        quemEnviou: "usuario2"
    };

    mensagens.push(mensagem);
    localStorage.setItem("mensagens", JSON.stringify(mensagens))

    msg2.value = "";
}

function buscarmsg() {

    var mensagensJson = localStorage.getItem("mensagens")
    var mensagens = JSON.parse(mensagensJson);

    var listaDeMensagens = document.getElementById("listaDeMensagens").append(li);

    for (var contador = 0; contador < mensagens.length; contador++) {

        var li = document.createElement("li");
        li.innerText = msg2.textoDaMensagem;

        if (mensagem.quemenviou === "usuario1") {
            li.classList.add("mensagemUsuario1")

        } else {
            li.classList.add("mensagemUsuario2");

        }

        listaDeMensagens.append(li);

    }

}
