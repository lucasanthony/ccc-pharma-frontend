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

function cadastropage()
{
location.href="/HTML/telacadastro.html"
}

function adminPage()
{
location.href="/HTML/adminPage.html"
}

function homepage()
{
location.href="/index.html"
}

function disppage()
{
location.href="/HTML/disponibilidade.html"
}
