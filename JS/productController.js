let produtos = [];

function addProduto() {
	let codigo = document.getElementById("codigo").value;
	let nome = document.getElementById("nome").value;
	let fabricante = document.getElementById("fabricante").value;
	let categoria = document.getElementById("categoria").value;
	let preco = document.getElementById("preco").value;
	let qtd = document.getElementById("quantidade").value;
	fetch('https://ccc-pharma2018.herokuapp.com/produtos/crud', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"codigo":codigo,"nome":nome,"fabricante":fabricante,"situacao":"true","categoria":categoria,"preco":preco,"quantidade":qtd,"desconto":"0"})
  });
	window.alert("Produto adicionado!");
}

function mudarPreco() {
	let codigo = document.getElementById("codigoUpdate").value;
	let preco = document.getElementById("precoUpdate").value;
	fetch('https://ccc-pharma2018.herokuapp.com/produtos/crud/'+codigo, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(preco)
  });
	window.alert("Preço alterado!");
}

function fecharCompra() {
	let id = document.getElementById("idUser").value;
	fetch('https://ccc-pharma2018.herokuapp.com/registro/novoRegistro/'+id, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
	window.alert("Compra Registrada!");
}



fetch('https://ccc-pharma2018.herokuapp.com/produtos', { 
 	method: 'GET' 
	})
	.then(function(response) { 
 		 response.json()
  		.then(function(data){
  			produtos = data;
  					 }) 
			})


function format() {
	prod = document.getElementById("wrapper");
	HTMLtemp = prod.innerHTML;
	HTMLnovo = prod.innerHTML;
	for (var i = 0; i < produtos.length; i++) {
		HTMLnovo = '<div class="format"><h3>Código: ' + produtos[i].codigo + '</h3>' +
				   '<h3>Nome: ' + produtos[i].nome + '</h3>' +
				   '<h3>fabricante: ' + produtos[i].fabricante + '</h3>' +
				   '<h3>preço: R$' + produtos[i].preco + '</h3>' +
				   '<h3>desconto: ' + produtos[i].desconto + '%</h3></div>';
		HTMLtemp = HTMLtemp + HTMLnovo;
	}
	prod.innerHTML = HTMLtemp;
}