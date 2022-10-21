const campos = document.getElementsByClassName("campo")

function InserirSimbolo() {
    var ultimoSimboloInserido = []
    var jogadas = 0

    for (let i = 0; i < campos.length; i++) {
        campos[i].addEventListener("click", () => {
            if (jogadas <= 9) {
                if (ultimoSimboloInserido[ultimoSimboloInserido.length - 1] == "X") {
                    campos[i].innerHTML = "O"
                    ultimoSimboloInserido.push("O")
                } else {
                    campos[i].innerHTML = "X"
                    ultimoSimboloInserido.push("X")
                }
                campos[i].setAttribute("disabled", true)
                jogadas++

            }
            VerificarSeGanhou(jogadas)
        })
    }
}


function VerificarSeGanhou(jogadas) {
    if (jogadas >= 5) {
        // Primeira linha
        if ((campos[0].innerHTML == "X" && campos[1].innerHTML == "X" && campos[2].innerHTML == "X") || (campos[0].innerHTML == "O" && campos[1].innerHTML == "O" && campos[2].innerHTML == "O")) {
            alert("Você Ganhou !")

        }
        //Segunda Linha
        if ((campos[3].innerHTML == "X" && campos[4].innerHTML == "X" && campos[5].innerHTML == "X") || (campos[3].innerHTML == "O" && campos[4].innerHTML == "O" && campos[5].innerHTML == "O")) {
            alert("Você Ganhou !")

        }
        //Terceira Linha
        if ((campos[6].innerHTML == "X" && campos[7].innerHTML == "X" && campos[8].innerHTML == "X") || (campos[6].innerHTML == "O" && campos[7].innerHTML == "O" && campos[8].innerHTML == "O")) {
            alert("Você Ganhou !")

        }
        //Primeira Coluna
        if ((campos[0].innerHTML == "X" && campos[3].innerHTML == "X" && campos[6].innerHTML == "X") || (campos[0].innerHTML == "O" && campos[3].innerHTML == "O" && campos[6].innerHTML == "O")) {
            alert("Você Ganhou !")

        }
        //Segunda Coluna
        if ((campos[1].innerHTML == "X" && campos[4].innerHTML == "X" && campos[7].innerHTML == "X") || (campos[1].innerHTML == "O" && campos[4].innerHTML == "O" && campos[7].innerHTML == "O")) {
            alert("Você Ganhou !")

        }
        //Terceira Coluna
        if ((campos[2].innerHTML == "X" && campos[5].innerHTML == "X" && campos[8].innerHTML == "X") || (campos[2].innerHTML == "O" && campos[5].innerHTML == "O" && campos[8].innerHTML == "O")) {
            alert("Você Ganhou !")

        }
        //Diagonal da Esquerda pra direita
        if ((campos[0].innerHTML == "X" && campos[4].innerHTML == "X" && campos[8].innerHTML == "X") || (campos[0].innerHTML == "O" && campos[4].innerHTML == "O" && campos[8].innerHTML == "O")) {
            alert("Você Ganhou !")

        }
        //Diagonal da Direita pra Esquerda
        if ((campos[2].innerHTML == "X" && campos[4].innerHTML == "X" && campos[6].innerHTML == "X") || (campos[2].innerHTML == "O" && campos[4].innerHTML == "O" && campos[6].innerHTML == "O")) {
            alert("Você Ganhou !")

        }
        else {
            alert('Deu empate !')
        }
    }
}


InserirSimbolo()