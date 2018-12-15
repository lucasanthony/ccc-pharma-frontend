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
