const URL_TO_FETCH = 'http://localhost:8080/produtos';
const p = document.getElementById("p");
var produtos = [];

fetch(URL_TO_FETCH, { 
  method: 'get' // opcional 
})
.then(function(response) { 
  response.json()
  .then(function(data){ 
     produtos = data; 
   }) 
})
.catch(function(err) { console.error(err); });

function addProduto() {
	let codigo = document.getElementById("codigo").value;
	let nome = document.getElementById("nome").value;
	let fabricante = document.getElementById("fabricante").value;
	let situacao = document.getElementById("situacao").value;
	let categoria = document.getElementById("categoria").value;
	let preco = document.getElementById("preco").value;
	let qtd = document.getElementById("quantidade").value;
	fetch('https://ccc-pharma2018.herokuapp.com/produtos/crud', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"codigo":codigo,"nome":nome,"fabricante":fabricante,"situacao":situacao,"categoria":categoria,"preco":preco,"quantidade":qtd,"desconto":"0"})
  });
	window.alert("Produto adicionado!");
}

function Nova()
{
location.href="/HTML/login.html"
}

function pageProduto()
{
location.href="/HTML/cadastrarProduto.html"
}

function homepage()
{
location.href="/index.html"
}

