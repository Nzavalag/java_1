const incrementButton = document.querySelector('#incremento');
const decrementButton = document.querySelector('#decremento');
const unitPrice = 400000;

let priceContainer = document.querySelector('.precio-inicial');
let totalPrice = document.querySelector('.valor-total');
let quantityContainer = document.querySelector('.cantidad');
let cantidad = 0;


const updatePrice = (action) => {

  if (action === 'incrementar') {
      cantidad++;
  }

  else if (action === 'disminuir' && cantidad > 0) {
      cantidad--;
  }


  const total = cantidad * unitPrice;


  quantityContainer.innerHTML = cantidad;
  totalPrice.innerHTML = total;
};


incrementButton.addEventListener('click', () => updatePrice('incrementar'));
decrementButton.addEventListener('click', () => updatePrice('disminuir'));