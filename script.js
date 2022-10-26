// Array com os objetos
let filmesTimBurton = [filme1 = {
  imagem: "https://flxt.tmsimg.com/assets/p10703_p_v8_ae.jpg",
  link: "https://www.adorocinema.com/filmes/filme-27624/", 
  nome: `Beetlejuice - Os Fantasmas se divertem`,
  tempo: 93,
  temJohnnyDepp: false,
  elenco: [`Michael Keaton`, ` Winona Ryder`, ` Alec Baldwin`, ` Geena Davis`]
},

filme2 = {
  imagem: "https://i.pinimg.com/originals/76/c1/01/76c101a07e6c5f1be7a72d67156691e1.jpg",
  link: "https://www.adorocinema.com/filmes/filme-4966/", 
  nome: `Batman`,
  tempo: 126,
  temJohnnyDepp: false,
  elenco: [`Michael Keaton`, ` Jack Nicholson`, ` Pat Hingle`, ` Michael Gough`]
},

filme3 = {
  imagem: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E418D0CB2EDD64C35237475BBDF6293C74696DAC86BA8C87468427031214237F/scale?width=1200&aspectRatio=1.78&format=jpeg",
  link: "https://www.adorocinema.com/filmes/filme-27624/", 
  nome: `Edward mãos de tesoura`,
  tempo: 105,
  temJohnnyDepp: true,
  elenco: [`Winona Ryder`, ` Johnny Depp`, ` Dianne Wiest`, ` Kathy Baker`]
}]

if (filme1.temJohnnyDepp) {
  console.log(`${filme1.temJohnnyDepp} tem o ator Johnny Depp`);
} else {
  console.log (`${filme1.nome}não tem o ator Johnny Depp`)
}

if (filme2.temJohnnyDepp) {
  console.log(`${filme2.temJohnnyDepp} tem o ator Johnny Depp`);
} else {
  console.log (`${filme2.nome} não tem o ator Johnny Depp`)
}

if (filme3.temJohnnyDepp) {
  console.log(`${filme3.nome} tem o ator Johnny Depp`);
} else {
  console.log (`${filme3.nome} não tem o ator Johnny Depp`)
}

// laço dos filmes
for (const i in filmesTimBurton) {
 console.log(filmesTimBurton[i].nome = filmesTimBurton[i].nome.toString());
}

// Função que retorna todos os objetos do array como string
function objectToString(array) {
  console.log("----------------------------------");
  for(const objeto of array){
    for (const prop in objeto) {
      console.log(`${[prop]}: ${objeto[prop]}`);
    }
    console.log("----------------------------------");
  }
}
objectToString(filmesTimBurton);

// Média
let media = ((filme1.tempo + filme2.tempo + filme3.tempo)/3)
console.log(`O tempo médio dos filmes é de: ${media} minutos`)

// DOM
function limpaInput() {
  document.getElementById('campo-de-busca').value= '';
}

// Função para buscar no array de objetos
function buscar(array, nomeDoFilme) {
  const timBurton = array.filter((filmesTimBurton)=> filmesTimBurton.nome.toLowerCase().includes(nomeDoFilme.toLowerCase()));

  if(timBurton.length){
    return timBurton;
  } else {
    return array;
  }
}

// Função que pega o valor do input e chama a função que busca os objetos
function buscarFilme(event){
  event.preventDefault()

  const input = document.getElementById('campo-de-busca').value;
  const filtroFilmes = buscar(filmesTimBurton, input);
  const container = document.getElementsByClassName('container')[0];

  if(input === ''){
    alert('Digite um nome de filme.');
    criarObjetosNoHtml(filmesTimBurton);
    container.removeAttribute('id', 'container');
  } else {
    console.log(filtroFilmes);
    criarObjetosNoHtml(filtroFilmes);
    container.setAttribute('id', 'container');
  }
  
  limpaInput()
}

// Habilitar o botão enter do teclado com o botão do campo de busca
const input = document.getElementById('campo-de-busca');
input.addEventListener("keyup", function(event){
  if(event.key === 'Enter'){
    event.preventDefault();
    document.getElementById('botao-buscar').click()
  }
})

// Adicionar objetos no HTML
function criarObjetosNoHtml (array) {
  let container = document.getElementsByClassName('container')[0]
  container.innerHTML= ""
  let card = ""
  array.map(element => {
    card = `<section class="card">
      <img src="${element.imagem}">
      <ul>
        <li>Nome: ${element.nome.toUpperCase()}</li>
        <li>Tempo: ${element.tempo} minutos</li>
        <li>Tem o ator Johnny Depp? ${element.temJohnnyDepp}</li>
        <li>Elenco: ${element.elenco}</li>
      </ul>
    </section>`
    container.innerHTML += card;
  });
}

criarObjetosNoHtml(filmesTimBurton)