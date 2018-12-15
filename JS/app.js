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

