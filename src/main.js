import {filtroNomes} from './data.js';
import data from './data/lol/lol.js';

//const lol = Object.keys(data.data); //tranformando objeto em um array
//console.log(teste.); //deu certo: array de strings

let dadosLol = [];
for (let character in data.data){
  dadosLol.push(data.data[character]);
}

const root = document.getElementById("info-cards");

function infosDosCardsTela (data) {
  root.innerHTML = data.map((character) => `
    <div class="cards">
      <div class="flip-container"> 
        <div class="flipper">
          
          <div class="front-cards-infos">
            <img alt="fotos-campeões" class="card-img" src="${character.splash}">
            <div id="front-cards-txt">
              <h1> ${character.name}</h1>
              <h4> ${character.title} </h4>
            </div>
          </div>
          
          <div class="back-cards-infos">
            <ul class="back-cards-txt">
              <h1 id="nome-campeao"><strong> ${character.name}</strong></h1>
              <li><strong>Ataque: ${character.info.attack} </strong></li>
              <li><strong>Defesa: ${character.info.defense} </strong></li>
              <li><strong>Magia: ${character.info.magic} </strong></li>
              <li><strong>Dificuldade: ${character.info.difficulty} </strong></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  `).join('');
}
infosDosCardsTela(dadosLol);


//PESQUISAR ESTÁ FUNCIONADO!
const campoPesquisar = document.getElementById("txt-pesquisa");
campoPesquisar.addEventListener("input", event => { //input é melhor que keypress
  const nomeDoCampeao = event.target.value.toUpperCase();  //event.target.value trabalham juntos. Para gravar o conteudo digitado usa esse event, o target é a referencia ao objeto que enviou o evento, e o .value é o valor (objeto+conteudo+valor)
  const filtrarCampeoes = filtroNomes(dadosLol, nomeDoCampeao); //chamada da função no arquivo data.js
  infosDosCardsTela(filtrarCampeoes);
});


const ordenarPor = document.getElementById("ordenar");
ordenarPor.addEventListener("click", () => {
    console.log("ordenar: ok");
});


const buscarPorFuncao = document.getElementById("buscar-funcao");
buscarPorFuncao.addEventListener("click", () => {
    console.log("buscar por função: ok");
});


const buscarPorDificuldade = document.getElementById("buscar-dificuldade");
buscarPorDificuldade.addEventListener("click", () => {
    console.log("buscar por dificuldade: ok");
});
