[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20788830&assignment_repo_type=AssignmentRepo)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Bruno Nasciemnto Cunha 
- Matricula: 905809
- Proposta de projeto escolhida:  Aproveitar a oportunidade do conhecimento adiquirido para contribuir com o centro de treinamento que eu sou pertecente.
- Breve descrição sobre seu projeto:  Página de Jiu-Jitsu Este projeto é a implementação de um wireframe de uma página simples de apresentação de um Centro de Treinamento de Jiu-Jitsu.
Ele foi desenvolvido a partir da simplicidade do projeto de portfólio, mantendo o HTML e CSS limpos e organizados,
e agora adcionado fluides e capacidades dinamicas com a aplicação de javaScript atraves do app.js, manipulando o DOM.

## Print da Home-Page
![alt text](<public/img/Captura de tela 2025-10-01 235313.png>)


## Print da página de detalhes do item

![alt text](<public/img/Captura de tela 2025-10-05 221207.png>)
## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
  {
    "id": 1,
    "titulo": "RRT Mulheres em Treinamento",
    "descricao": "Novo plano visa melhorar o condiçionamento fisíco e capacitar as mulheres para que sa´bão o mínimo para poder se defender, uma vez que vivemos em um mundo em que os valores umanos estão se perdendo.",
    "conteudo": "O  CT RRT vem com a criação deste projeto em prol de uma sociedade capacitada e conciente de sua força e capacidade, entendendo que a arte suave pode salvar vidas.",
    "categoria": "Esporte",
    "autor": "Robson Ribeiro",
    "data": "2025-03-30",
    "imagem": "img/Imagem do WhatsApp de 2025-10-05 à(s) 17.17.18_392f49c6.jpg"
  },
  {
    "id": 2,
    "titulo": "Tecnologia 6G Está em Desenvolvimento",
    "descricao": "Capacidades trabalhadas nas aulas de Jiu Jitsu.",
    "conteudo": "Onde Voce aprende muito mais que só um esporte mas tambem encontra uma familia e acaba entendendo que a luta e muito mais do que um esporte, e uma escola de disciplina, respeito, carater, onde são formados seres humanos capazes de conviver em uma sociedade dignos de respeito e reconhecimento.",
    "categoria": "Esporte",
    "autor": "Robson Ribeiro",
    "data": "2025-03-28",
    "imagem": "img/Imagem do WhatsApp de 2025-10-05 à(s) 17.58.12_00903386.jpg"
  },
  {
    "id": 3,
    "titulo": "Honrarias ao Mestre Robson Ribeiro",
    "descricao": "Evento Esportivo onde foi realizado a entrega de honrarias ao Mestre Robson Ribeiro.",
    "conteudo": "Entrega De Reconhecimento .",
    "categoria": "Esporte",
    "autor": "Bruno N Cunha",
    "data": "2025-03-27",
    "imagem": "img/Imagem do WhatsApp de 2025-10-05 à(s) 17.59.00_277bc63f.jpg"
  }
]

const montarItemBlog = function(dadosItem){
  return `
    <div class="col-lg-4 mb-5">
      <article class="card blog-item" data-id="${dadosItem.id}">
        <img src="${dadosItem.imagem}" alt="${dadosItem.descricao}">
        <div class="card-body">
          <h5>${dadosItem.categoria}</h5>  
          <h3>${dadosItem.titulo}</h3>
          <p>${dadosItem.descricao}</p>
          <div class="blog-metadado">${dadosItem.data} - ${dadosItem.autor}</div>
        </div>
      </article>
    </div>
  `;
};

const montarListaBlog = function(dados){
  let html = '';
  dados.forEach(item => {
    html += montarItemBlog(item);
  });

  return html;
};

const montarDetalhe = function(id){
  debugger;
  const post = dados.find(item => item.id == id);
  if (!post){
    alert("Artigo não encontrado.")
    document.location.href = "index.html";
  }

  const postHtml = document.getElementById("post");
  
  postHtml.innerHTML = `
    <h5>${post.categoria}</h5>
    <h2>${post.titulo}</h2>
    <div class="pb-4">${post.data} - ${post.autor}</div>
    <img src="${post.imagem}" alt="${post.descricao}" class="mb-3" width="100%"/>
    <p>${post.conteudo}</p>
  
  `;



}

document.addEventListener("DOMContentLoaded", function() {
  debugger;
  const list = document.getElementById("blog-list");
  if (list){
    list.innerHTML = montarListaBlog(dados);
  }
  else{
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    montarDetalhe(id);
  }


});


document.addEventListener('click', function(evt) {
  debugger;
  const item = evt.target.closest('.blog-item');
  if (!item)
    return;
  const id = item.dataset.id;
  document.location.href = 'detalhes.html?id=' + encodeURIComponent(id);
});


