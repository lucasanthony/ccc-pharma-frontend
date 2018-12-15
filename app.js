var produtos = [];

fetch('http://localhost:8080/produtos', { 
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

function loginPage()
{
location.href="/HTML/login.html"
}

function productPage()
{
location.href="/HTML/cadastrarProduto.html"
}

function homepage()
{
location.href="/index.html"
}

