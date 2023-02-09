import data from './data/lol/lol.js';

//const lol = Object.keys(data.data); //tranformando objeto em um array
//console.log(teste.); //deu certo: array de strings

let lol = [];
for (let character in data.data){
  lol.push(data.data[character]);
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

infosDosCardsTela(lol);


