function addCliente() {
	let username = document.getElementById("username").value;
	let nome = document.getElementById("nome").value;
	let senha = document.getElementById("senha").value;
	fetch('https://ccc-pharma2018.herokuapp.com/clientes/cadastrar', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"username":username,"nome":nome,"senha":senha})
  });
	window.alert("Cadastro feito com sucesso!");
}

function login() {
	let username = document.getElementById("username").value;
	let senha = document.getElementById("senha").value;
	fetch('https://ccc-pharma2018.herokuapp.com/clientes/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(username,senha)
  })
	.then(function(response) {
		response.json()
		.then(function(data){
			window.alert(data);
		})
	})
	window.alert("Login efetuado");
}