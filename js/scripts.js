const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
});

function handleSend(){
  const cliente = {
    name: '',
    email: '',
    adress: '',
    numberPhone: 0
  };
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const adress = document.getElementById('adress').value;
  const numberPhone = document.getElementById('numberPhone').value;

  cliente.name = name;
  cliente.email = email;
  cliente.adress = adress;
  cliente.numberPhone = numberPhone;

  localStorage.setItem( `${cliente.name}` ,JSON.stringify(cliente));
  alert(`Cliente cadastrardo com sucesso!
  Nome: ${cliente.name}`)
}