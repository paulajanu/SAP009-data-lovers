// estas funciones son de ejemplo
//export const example = () => {
  //return 'example';
//};
//export const anotherExample = () => {
 // return 'OMG';
//};
//   const  resultadoLocalização  =  data.filter( ( personagem )  =>  personagem . nome . toLowerCase ( ) . includes ( condição . toLowerCase ( ) ) ) ;
//   return  resultadoLocalização ;
// } ;

// export const nameFilter = (data, search) => data.filter(character => {
//   return character.name.toLowerCase().includes(search.toLowerCase());
// })

//export const nameFilter = (data, search) => data.filter(item => item.title.toUpperCase().includes(search.toUpperCase()))

export const filtroNomes = (dados, nomePesquisado) => {
  return dados.filter(campeao => campeao.name.toUpperCase().includes(nomePesquisado)); //poderia ser id ou name
  
};