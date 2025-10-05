const dados = [
  {
    "id": 1,
    "titulo": "Prefeitura Lança Novo Plano de Mobilidade Urbana",
    "descricao": "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
    "conteudo": "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana que inclui a criação de corredores exclusivos de ônibus, ciclovias e a requalificação de vias principais. O projeto será implementado ao longo dos próximos dois anos.",
    "categoria": "Cidades",
    "autor": "Joana Ribeiro",
    "data": "2025-03-30",
    "imagem": "img/mobilidade.jpg"
  },
  {
    "id": 2,
    "titulo": "Tecnologia 6G Está em Desenvolvimento",
    "descricao": "Pesquisadores anunciam avanços na próxima geração de redes móveis.",
    "conteudo": "Universidades e empresas de telecomunicação já estão testando tecnologias que poderão compor a infraestrutura do 6G. A expectativa é que a nova geração seja 100 vezes mais rápida que o 5G e amplie a integração entre dispositivos inteligentes.",
    "categoria": "Tecnologia",
    "autor": "Carlos Mendes",
    "data": "2025-03-28",
    "imagem": "img/tecnologia_6g.jpg"
  },
  {
    "id": 3,
    "titulo": "Festival de Música Reúne Mais de 50 Mil Pessoas",
    "descricao": "Evento cultural movimentou o final de semana com atrações nacionais e internacionais.",
    "conteudo": "Durante três dias de programação, o festival contou com a participação de mais de 40 artistas e promoveu atividades culturais e gastronômicas em paralelo. A prefeitura estima um impacto positivo no turismo local.",
    "categoria": "Cultura",
    "autor": "Ana Clara Silva",
    "data": "2025-03-27",
    "imagem": "img/festival_musica.jpg"
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

