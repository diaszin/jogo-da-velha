const campos = document.getElementsByClassName("campo")

function InserirSimbolo(){
    var ultimoSimboloInserido = []
    var jogadas = 0

    for(let i =0;i<campos.length;i++){
        campos[i].addEventListener("click", ()=>{
            if(jogadas <=9){
                if(ultimoSimboloInserido[ultimoSimboloInserido.length-1] == "X"){
                    campos[i].innerHTML = "O"
                    ultimoSimboloInserido.push("O")
                }else{
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


function VerificarSeGanhou(jogadas){
    if(jogadas >=5){
        if((campos[0].innerHTML=="X" && campos[1].innerHTML=="X" && campos[2].innerHTML=="X") || (campos[0].innerHTML=="O" && campos[1].innerHTML=="O" && campos[2].innerHTML=="O")){
            alert("Você Ganhou !")
            location.reload()
        }
    }
}


InserirSimbolo()