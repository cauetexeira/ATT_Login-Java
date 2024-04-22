function verificar() {
    //Setando as ID's para serem lidas apenas com o comando Const
    const Nome=document.getElementById("Nome");
    const Senha=document.getElementById("Senha");

    var nomeCompara = "Senai";
    var senhaCompara = "123";

    if((Nome !== nomeCompara) || (Senha !== senhaCompara)) {
        alert("A Senha/Usuário inserido está incorreto.");
    } else {
        window.location.href = "Página.html";
    }
}