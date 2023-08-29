let precio = 400000
let cantidad = 1

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const buttonAdd = document.querySelector("#buttonAdd");
const buttonSubstract = document.querySelector("#buttonSubstract");
const quantity = document.querySelector(".cantidad");

const amount = document.querySelector(".valor-total");


document.addEventListener("DOMContentLoaded", () => { 

  amount.innerHTML = cantidad * precio;
  quantity.innerHTML = cantidad;

  buttonAdd.addEventListener("click", () => {
    cantidad++;
    quantity.innerHTML = cantidad;
    amount.innerHTML = precio * cantidad;
  })
  
  buttonSubstract.addEventListener("click", () => {
    if (cantidad <= 0) return 
    cantidad--; 
    quantity.innerHTML = cantidad;
   amount.innerHTML = precio * cantidad;
  })
})