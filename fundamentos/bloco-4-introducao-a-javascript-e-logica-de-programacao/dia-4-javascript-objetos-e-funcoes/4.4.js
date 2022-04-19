// OBJETOS

/* 
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };


console.log(car['type']);
*/
/*
let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    

    console.log(diasDaSemana['2']); // domingo
*/


/*
    let conta = {
        agencia: '0000',
        banco: {
          cod: '012',
          id: 4,
          nome: 'TrybeBank',
        },
      };
      
      let infoDoBanco = 'banco';



      console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
      console.log(conta[infoDoBanco]['nome']); // TrybeBank
      
      console.log(conta.agencia); // 0000
      console.log(conta['agencia']); // 0000
      
      console.log(conta.banco.cod); // 012
      console.log(conta['banco']['id']); // 4
      */


/*
      let usuario = {
        id: 99,
        email: 'jakeperalta@gmail.com',
        infoPessoal: {
          nome: 'Jake',
          sobrenome: 'Peralta',
          endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
          },
        },
      };
      
      console.log(usuario['id']); // 99
      console.log(usuario.email); // jakeperalta@gmail.com
      
      console.log(usuario.infoPessoal.endereco.rua); // Smith Street
      console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque
      */

      /*
      let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey
*/

/*
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
*/
/*


let pessoa = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
        
}

//console.log("A jogadora "+pessoa.name, pessoa.lastName + " tem", pessoa.age +" anos de idade")
//console.log(pessoa.bestInTheWorld.length);
console.log("A jogadora "+pessoa.name, pessoa.lastName + " foi eleita a melhor do mundo por",pessoa.bestInTheWorld.length +" vezes")

console.log("Medalhas de ouro:", pessoa.medals.golden,". Medalhas de prata:", pessoa.medals.silver);
*/

// Agora FOR/IN e FOR/OF

/*
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}
*/
/*
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }
  */

  /*
  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;
  */

 /*
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("bem vinda", info.personagem);
  */

/*
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info.recorrente = 'Sim';

  console.log(info)
*/

/*
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info.recorrente = 'Sim';

  for (let element in info) {
      console.log(element)
  }
  */
/*
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info.recorrente = 'Sim';

  for (let element in info) {
      console.log(info[element])
  }
  */
/*
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  let info2 = {
      personagem: 'Tio Patinhas',
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota : 'O último MacPatinhas',
      recorrente: 'Sim'
  }

  for (let element in info){
    //console.log(info[element])
    for (let element in info2){
    }
    if(info[element] != info2[element]){
        console.log(info[element],"e", info2[element])
    } else{
        console.log("Ambos Recorrentes")
    }

  }
  */
 /*

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  leitor.livrosFavoritos[1] = 
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

  console.log("O livro favorito de",leitor.nome, leitor.sobrenome,"se chama", leitor.livrosFavoritos[0].titulo)
  console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos')
  */
/*
  function verificaPalidromo(string){
    let resultado = true;
    for(let element in string){
        //console.log(string[element]);
        //console.log(string[string.length -1 - element])
        if(string[element] === string[(string.length -1) - element]){
            resultado = true;
        } else{
            resultado = false;
        }
    }
    console.log(resultado)
  }
  verificaPalidromo('arara');
  verificaPalidromo('descomplica');
*/

/*
function maiorValor(array){
    valorInicial = 0;
    for(let element in array){
        if(array[valorInicial] < array[element]){
            maiorValor = array[element];
            console.log(array[valorInicial])
        }
    }
    console.log(maiorValor)
}
maiorValor([2, 3, 6, 7, 10, 11]);
*/
/*
function menorValor(array){
    valorInicial = 0
    for(let element in array){
        if(array[valorInicial] > array[element])
        {
            //menorValor = array[element]
            menorValor = element;
        }

    }
    console.log(menorValor)
}
menorValor([2, 4, 6, 7, 10, 0, -3]);
*/
/*
function nomeMaior(array){
    let maiorNome = [0];
    for(let element in array){
        //console.log(array[element].length)
        if(maiorNome.length < array[element].length){
            maiorNome = array[element]
        }
    }
    console.log(maiorNome)
}
nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
*/
/*
function repeteNumero(array){
    let contador = 0;
    let repete = 0;
    let numRepete = 0;
    for(element in array){
        //console.log(array[element])
        let numero = array[element];
        //console.log(numero);
        for(element2 in array){
            if(numero === array[element2]){
                //console.log(numero, array[element2])
                contador = contador + 1;
            }
        }
        if(contador > repete){
            repete = contador;
            numRepete = array[element];
        }
        contador = 0;
    }
    console.log(repete, numRepete)
}
repeteNumero([5, 3, 2, 5, 5, 2, 3]);
*/
/*
function somaNumeros(numeros){
    let soma = 0;
    for(let i = 1; i <= numeros; i+=1){
        console.log(i)
        soma = soma + i;
    }
    console.log(soma)
}
somaNumeros(5)
*/

/*
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }

  */
  
  function verificaFim(string, stringEnding){
      string = string.split('');
      stringEnding = stringEnding.split('');
      resultado = true;

      //console.log(string, stringEnding)

      for(let i = 0; i < stringEnding.length; i+=1){
          console.log(string[string.length - stringEnding.length + i], stringEnding)
          if(string[string.length - stringEnding.length + i] != stringEnding[i]){
            console.log(string[string.length - stringEnding.length + i])  
            resultado = false;
          }
      }
      console.log(resultado)
  }
verificaFim('trybe', 'be');
