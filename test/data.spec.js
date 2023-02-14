import { filtroNomes, ordenarCampeoes, funcaoDosCampeoes, dificuldadeCampeao } from '../src/data.js';
//ordenarCampeoes, funcaoDosCampeoes, dificuldadeCampeao, porcentagemCampeoes} from '../src/data.js';
//pq o git bash nao esta oclorido?
//como testar o calculo de porcentagem?

const testeCampeoes = { //quantos devemos testar???
  campeao1: {
    name: "Aatrox",
    info: {
      dificuldade: 4,
    },
    tags: ["Fighter" , "Tank"]
  },

  campeao2: {
    name: "Ahri",
    info: {
      dificuldade: 5,
    },
    tags: ["Mage" , "Assassin"]

  },
  campeao3: {
    name: "Zyra",
    info: {
      dificuldade: 7,
    },
    tags: ["Mage" , "Support"]
  },
}

//testando se nosso objeto é um objeto mesmo
describe("testeCampeoes", () => {
  it("deve ser um objeto", () => {
    expect(typeof testeCampeoes).toBe("object");
  });
});

//testando função filtro nomes
describe('filtroNomes' , () => {
  it('deve ser uma função', () => {
    expect(typeof filtroNomes).toBe("function");
  });
});

//testando função ordenar campeões
describe('ordenarCampeoes', () => {
  it('deve ser uma função', () => {
    expect(typeof ordenarCampeoes).toBe("function");
  });
});

//testando função que verficiar a função dos campeões
describe('funcaoDosCampeoes', () => {
  it('deve ser uma função', () => {
    expect(typeof funcaoDosCampeoes).toBe("function");
  });
});

//testando a função dificuldade dos campeões
describe('dificuldadeCampeao', () => {
  it('deve ser uma função', () => {
    expect(typeof dificuldadeCampeao).toBe("function");
  });
});

// //testando o calculo de porcentagem
// describe('porcentagemCampeoes', () => {
//   it('xxxx', () => {
//   });
// });