/* VARIÁVEIS = um espaço da memoria do computador que guardamos algo
FUNÇÃO = um trecho de codigo que só é executado quando é chamado
async = é uma palavra-chave em JavaScript que é usada para criar funções assíncronas. Funções assíncronas são usadas para lidar
com operações assíncronas, como chamadas de API, leitura de arquivos e outras tarefas que podem levar algum tempo para serem concluídas.
AWAIT = serve para avisar o js esperar o servidor responder.
FETCH = é a ferramenta que vai até o servidor buscar a informação.
.then = serve para pegar a resposta
Math.floor() = método também pode ser usado para arredondar para um número específico de casas decimais. Aqui está um exemplo:
*/

let chave = "a137eafd91a92d2cb0e7ac944bf997ef"

function colocaNatela(dados) { 
    console.log(dados)

document.querySelector(".cidade").innerHTML ="Tempo em "+dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".descricao").innerHTML = dados.weather[0].description
document.querySelector(".icone") .src="https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
document.querySelector(".umidade") .innerHTML = "umidade: " + dados.main.humidity + "%"

}

async function buscarCidade(cidade){
let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +
"&lang=pt_br" + "&units=metric")
.then(resposta => resposta.json())

colocaNatela(dados)
}

function cliqueiNobotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}