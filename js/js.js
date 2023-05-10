/*alert('oi');*/
var blackWhite = false;

function enviarMensagem() {
    var nome = document.getElementById('nome').value;
    var msg = document.getElementById('mensagem').value;
    var checkbox = document.getElementById('responsabilidade');
    var caixa = document.getElementById('caixamensagem');
    var span = document.getElementById('erro');
    var  msg_erro;
    var comentario;
    if(!checkbox.checked){
        msg_erro = 'Marque o termo de Responsabilidade!'
        span.innerHTML = msg_erro;
        return false;
    }else{
        document.comentarios.responsabilidade.checked = false;
        msg_erro = '';
        span.innerHTML = msg_erro;
    }
    if(nome.length <3){
        document.getElementById('nome').focus();
        msg_erro = 'Insira um nome com mais de 2 caracteres!'
        span.innerHTML = msg_erro;
    }else if(msg.length <5){
        msg_erro = 'Insira um comentario com mais de 5 caracteres!'
        span.innerHTML = msg_erro;
    }else{
        nome = nome.bold();
        comentario = nome+ "<br>"+msg + "<hr>";
        caixa.innerHTML += comentario;
        document.comentarios.nome.value = "";
        document.comentarios.mensagem.value = "";
        document.comentarios.mensagem.value.focus();
        msg_erro = '';
    }
}
function pretoBranco(){
    if(blackWhite == false){
        document.getElementById('body').classList.add('pretobranco');
    }
}
function resetarPretoBranco(){
    var blackWhite = true;
    if(blackWhite == true){
        document.getElementById('body').classList.remove('pretobranco');
    }

}
function aumentar(){
    document.body.style.zoom = '150%';
}
function tamanhoNormal(){
    document.body.style.zoom = '100%';
}
function diminuir(){
    document.body.style.zoom = '75%';
}