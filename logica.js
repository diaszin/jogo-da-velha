const campos = document.getElementsByClassName("campo")
var ganhou = false

function InserirSimbolo() {
    var ultimoSimboloInserido = []
    var jogadas = 0

    for (let i = 0; i < campos.length; i++) {
        campos[i].addEventListener("click", () => {
            if (jogadas <= 9) {
                if (ultimoSimboloInserido[ultimoSimboloInserido.length - 1] == "X") {
                    campos[i].innerHTML = "O"
                    campos[i].dataset.simbolo="O"
                    ultimoSimboloInserido.push("O")
                } else {
                    campos[i].innerHTML = "X"
                    ultimoSimboloInserido.push("X")
                    campos[i].dataset.simbolo="X"
                }
                campos[i].setAttribute("disabled", true)
                jogadas++

            }
            VerificarSeGanhou(jogadas)
            if(ganhou == true){
                for(let i=0;i<campos.length;i++){
                    if(campos[i].innerHTML.length ==0){
                        campos[i].disabled = true
                    }
                }
            }
        })
    }
}


function VerificarSeGanhou(jogadas) {
    var tabuleiro = [
        [campos[0].innerHTML, campos[1].innerHTML, campos[2].innerHTML],
        [campos[3].innerHTML, campos[4].innerHTML, campos[5].innerHTML],
        [campos[6].innerHTML, campos[7].innerHTML, campos[8].innerHTML],
    ]
    if (jogadas >= 5) {
        // Primeira linha
        if (tabuleiro[0][0] == tabuleiro[0][1] == tabuleiro[0][2]) {
            alert("Você Ganhou !")
            ganhou = true

        }
        if (tabuleiro[1][0] == tabuleiro[1][1] == tabuleiro[1][2]) {
            alert("Você Ganhou !")
            ganhou = true

        }
        if (tabuleiro[2][0] == tabuleiro[2][1] == tabuleiro[2][2]) {
            alert("Você Ganhou !")
            ganhou = true
            
        }
        if(tabuleiro[0][0] == tabuleiro[1][0] == tabuleiro[2][0]){
            alert("Você Ganhou !")
            ganhou = true
        }
        if(tabuleiro[0][1] == tabuleiro[1][1] == tabuleiro[2][1]){
            alert("Você Ganhou !")
            ganhou = true
        }
        if(tabuleiro[0][2] == tabuleiro[1][2] == tabuleiro[2][2]){
            alert("Você Ganhou !")
            ganhou = true
        }
        if(tabuleiro[0][0] == tabuleiro[1][1] == tabuleiro[2][2]){
            alert("Você Ganhou !")
            ganhou = true
        }
        if(tabuleiro[0][2] == tabuleiro[1][1] == tabuleiro[2][0]){
            alert("Você Ganhou !")
            ganhou = true
        }
        else if(jogadas>=9){
            alert("Deu empate !")
            ganhou = true
        }
    }
}


InserirSimbolo()