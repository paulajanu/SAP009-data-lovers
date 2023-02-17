import { filtroNomes, ordenarCampeoes, funcaoDosCampeoes, dificuldadeCampeao } from '../src/data.js';

const aatrox = {
  name: "Aatrox",
  info: {
    dificuldade: 4,
  },
  tags: ["Fighter" , "Tank"]
};
const ahri =  {
  name: "Ahri",
  info: {
    dificuldade: 5,
  },
  tags: ["Mage" , "Assassin"]

};
const zyra =  {
  name: "Zyra",
  info: {
    dificuldade: 7,
  },
  tags: ["Mage" , "Support"]
};

const testeCampeoes = [aatrox, ahri, zyra];

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
  it('deve retornar um array com os dados do nome do campeão que foi pesquisado', () => {
    const name = 'Aatrox';
    expect(filtroNomes(testeCampeoes, name)).toEqual([aatrox])
  })
});

//testando função ordenar campeões
describe('ordenarCampeoes', () => {

  it('deve ser uma função', () => {
    expect(typeof ordenarCampeoes).toBe("function");
  }); //ok

  it('deve ordenar de Z-A', () => {
    const resultado = ordenarCampeoes(testeCampeoes, "Z-A");
    expect(resultado[0].name).toBe("Zyra");
  });

  it('deve ordenar de A-Z', () => {
    const resultado = ordenarCampeoes(testeCampeoes, 'A-Z');
    expect(resultado[0].name).toBe("Aatrox");
  });

});

//testando função que verficiar a função dos campeões         
describe('funcaoDosCampeoes', () => {
  it('deve ser uma função', () => {
    expect(typeof funcaoDosCampeoes).toBe("function");
  }); //ok

  it('deve buscar por Lutadores ', () => {
    const resultado = funcaoDosCampeoes(testeCampeoes, "Fighter");
    expect(resultado).toEqual([aatrox]);
  });

  it('deve buscar por Assassinos ', () => {
    const resultado = funcaoDosCampeoes(testeCampeoes, "Assassin");
    expect(resultado).toEqual([ahri]);
    
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