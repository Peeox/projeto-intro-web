//1. Transforme os itens que criamos nas últimas semanas em objetos.

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

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

let filmesTimBurton = []

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

// filmesTimBurton.push(filme1, filme2, filme3)

/*4. Altere o item 3 “Adicione os novos objetos no array de objetos, 
utilizando o push()”, para criar uma verificação antes de dar o push. 
A caraterística booleana do objeto deve ser validada. 
Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

if (filme1.temJohnnyDepp === true){
filmesTimBurton.push(filme1);
} 

if (filme2.temJohnnyDepp === true){
filmesTimBurton.push(filme2);
} 

if (filme3.temJohnnyDepp === true){
filmesTimBurton.push(filme3);
}

5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** 
avisando para o usuário que o item não foi adicionado, e não faça o push*/

if (filme1.temJohnnyDepp === true){
filmesTimBurton.push(filme1);
} else{
alert(`O filme ${filme1.nome} não tem o ator Johnny Depp`)
}

if (filme2.temJohnnyDepp === true){
filmesTimBurton.push(filme2);
} else{
alert(`O filme ${filme2.nome} não tem o ator Johnny Depp`)
}

if (filme3.temJohnnyDepp === true){
filmesTimBurton.push(filme3);
} else{
alert(`O filme: ${filme3.nome} não tem o ator Johnny Depp`)
}

console.log(filmesTimBurton)