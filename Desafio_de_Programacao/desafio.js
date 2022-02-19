//1. Questão escreva um algoritmo que mostre na tela uma escada 
//de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.
  // Linguagem em javascript: Utilizando a função array

  let array = [ ]
  function exibeaEscada(entrada) {
      for (let i = 0; i < entrada; i++) {
          array.push ( "".repeat (entrada - i - 1)+ "*".repeat(i +1))
         //

      }
      for ( const entrada of array) {
          console.log (entrada)

      }
  }
  exibeaEscada (6)
  


  // 2.  nao conseguir desenvolver ( :/)

  // 3. tentar o anagrama



  let entrada = "Alegria, alergia, regalia, galeria, Cantiga, catinga,Carro,corar"
  
let words = entrada.split(", ");

for (let i = 0; i < words.length; i++) {

  let word = words[i];
  let alfabetica = word.split("").sort().join("");

  for (let j = 0; j < words.length; j++) {

    if (i === j) {
      continue;
    }

    let other = words[j];
    if (alfabetica === other.split("").sort().join("")) {
      console.log(word + " - " + other + " (" + i + ", " + j + ")");
    }
  }
}