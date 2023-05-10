var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

var raio = 10

var xAleatorio;
var yAleatorio;

/* Esaas duas variaves ainda vao rececer valor na funcao (repeticao) */

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

function limpatela() {
    pincel.clearRect(0, 0, 600, 400);
}

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}



function desenhaAlvo(x, y) {

    desenhaCirculo(x, y, raio + 10, "red");
    desenhaCirculo(x, y, raio + 5, "white")
    desenhaCirculo(x, y, raio, "red");
}


function sorteiaPosicao() {
    return Math.floor(Math.random() * 600)

}


function repeticao() {

    limpatela();
   xAleatorio = sorteiaPosicao(600);
   yAleatorio = sorteiaPosicao(400);

    desenhaAlvo(xAleatorio, yAleatorio);


}


setInterval(repeticao, 1000);

function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;


    if ((x < xAleatorio + raio)
        && (x > xAleatorio - raio)
        && (y > yAleatorio - raio)
        && (y < yAleatorio + raio)) {

       alert("Parabêns você acertou!!")
    }


}



tela.onclick = dispara;