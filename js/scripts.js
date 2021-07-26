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

const buttonBuy = document.querySelectorAll('.button-buy');
var cartPrice = 0.0;
var i = 0;
var clicked = false;

buttonBuy.forEach(buttonBuys => {
  
  buttonBuys.addEventListener('click', button =>{
    clicked = true;
    console.log(buttonBuys.value);
    cartPrice = buttonBuys.value;
    localStorage.setItem(`compra${i}`, JSON.stringify(cartPrice));
    i++;
    alert(`Produto no valor: ${cartPrice} Foi adicionado no carrinho!` )
    if(clicked){
      buttonBuys.style.background="grey";
    }
    
  })
})