filme1 = {
  nome: `Beetlejuice - Os Fantasmas se divertem`,
  tempo: 92,
  temJohnnyDepp: false,
  elenco: [`Michael Keaton`, ` Winona Ryder`, ` Alec Baldwin`, ` Geena Davis`]
}

filme2 = {
  nome: `Batman`,
  tempo: 126,
  temJohnnyDepp: false,
  elenco: [`Michael Keaton`, ` Jack Nicholson`, ` Pat Hingle`, ` Michael Gough`]
}

filme3 = {
  nome: `Edward mãos de tesoura`,
  tempo: 105,
  temJohnnyDepp: true,
  elenco: [`Winona Ryder`, ` Johnny Depp`, ` Dianne Wiest`, ` Kathy Baker`]
}

let filmesTimBurton = []
filmesTimBurton.push(filme1, filme2, filme3)

/*2. Ainda no relatório, altere-o para que ele seja criado 
utilizando laços. Ou seja, você não deve mais imprimir individualmente 
cada item do relatório. Cada item deve ser exibido a partir de uma 
iteração do laço. Para testar, adicione mais um item ao 
array de objetos, e verifique se ele é exibido corretamente. */

for (let i in filmesTimBurton) {
 filmesTimBurton[i].elenco = filmesTimBurton[i].elenco.toString();
 console.log(filmesTimBurton[i].elenco)
}

/*3. Crie uma função que receba como parâmetro um objeto,
 e devolva a string do relatório com os dados do objeto.*/


function objectToString(objeto) {
  let relatorio = "";
  for (const i in objeto) {
    relatorio = `${relatorio}\n${[i]}: ${objeto[i]}`;
  }
  return relatorio;
}

/*4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, 
e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. 
Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.*/

function filtraElenco(arrayDeElenco, string) {
  for (let i in arrayDeElenco) {
    if (arrayDeElenco[i].nome === string) {
      return arrayDeElenco[i];
    }
  }
  return alert(`Sua busca ${string} não foi encontrada.`);
}
console.log(filtraElenco(filmesTimBurton, "Batman"));