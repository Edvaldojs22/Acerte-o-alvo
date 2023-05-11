var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
const mensagem = document.querySelector(".parabens");
const botaoStart = document.querySelector(".botao");
const baixar = document.querySelector(".baixar");
const aumentar = document.querySelector(".aumentar");
const velocidade = document.querySelector(".velocidade")



var raio = 10

var xAleatorio;
var yAleatorio;


pincel.fillStyle = "#fad10292";
pincel.fillRect(0, 0, 500, 300);

function limpatela() {
    pincel.clearRect(0, 0, 500, 300);
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

desenhaAlvo(250, 150)

var segundos = 500

velocidade.innerHTML = segundos + "ms"

function atualizaVelocidade() {
    velocidade.innerHTML = segundos + "ms"
}

aumentar.addEventListener("click", () => {
    segundos = segundos + 100
    atualizaVelocidade()

})

baixar.addEventListener("click", () => {
    segundos = segundos - 100
    atualizaVelocidade()
})


botaoStart.addEventListener("click", jogo)

function jogo() {

    limpatela()

    function desenhaAlvo(x, y) {

        desenhaCirculo(x, y, raio + 10, "red");
        desenhaCirculo(x, y, raio + 5, "white")
        desenhaCirculo(x, y, raio, "red");
    }

    function sorteiaPosicao() {
        return Math.floor(Math.random() * 500)

    }

    function repeticao() {

        limpatela();
        xAleatorio = sorteiaPosicao(500);
        yAleatorio = sorteiaPosicao(300);
        desenhaAlvo(xAleatorio, yAleatorio);
    }

    setInterval(repeticao, segundos);

    tela.onclick = dispara;

    function dispara(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;


        if ((x < xAleatorio + raio)
            && (x > xAleatorio - raio)
            && (y > yAleatorio - raio)
            && (y < yAleatorio + raio)) {

            mensagem.style.display = "block";
        }
    }

}

tela.onclick = dispara;


