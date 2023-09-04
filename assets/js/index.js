const price = document.querySelector(".precio-inicial");
const amount = document.querySelector(".valor-total");
const btnAdd = document.querySelector("#buttonAdd");
const btnSubstract = document.querySelector("#buttonSubstract");
let quantity = document.querySelector(".cantidad");


document.addEventListener("DOMContentLoaded", () => {

  btnAdd.addEventListener("click", () => {
    quantity.innerHTML++;
    amount.innerHTML = price.innerHTML * quantity.innerHTML;
  })
  btnSubstract.addEventListener("click", () => {
    if (quantity.innerHTML <= 0) return
    quantity.innerHTML--;
    amount.innerHTML = price.innerHTML * quantity.innerHTML;
  })
})