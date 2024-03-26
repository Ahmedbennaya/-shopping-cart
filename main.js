let totalPrice = document.getElementById("totalP");
let sum = 0;

function plusClick(id) {
  console.log(id); // p1 / p2 / p3

  let quantity = document.getElementById("q" + id[1]);
  quantity.innerHTML = Number(quantity.innerHTML) + 1;
  let price = document.getElementById("s" + id[1]);
  let total = document.getElementById("t" + id[1]);
  total.innerHTML = Number(total.innerHTML) + Number(price.innerHTML);
  sum = Number(price.innerHTML) + sum;
  totalPrice.innerHTML = sum;
}

function deleteItem(button) {
  button.closest('.group').remove();
}

// Select all the delete buttons and add an event listener to each one
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    deleteItem(button);

    // Calculate the new total price of the products
    const totalPrices = document.querySelectorAll('.price-value');
    let total = 0;

    totalPrices.forEach(price => {
      total += parseInt(price.innerText);
    });

    // Update the total price span element
    const totalPriceSpan = document.getElementById('totalP');
    totalPriceSpan.innerText = total;
  });
});
function minusClick(id) {
  let quantity = document.getElementById("q" + id[1]);
  if (Number(quantity.innerHTML) > 0) {
    quantity.innerHTML = Number(quantity.innerHTML) - 1;

    let price = document.getElementById("s" + id[1]);
    let total = document.getElementById("t" + id[1]);

    total.innerHTML = Number(total.innerHTML) - Number(price.innerHTML);

    sum = sum - Number(price.innerHTML);
    totalPrice.innerHTML = sum;
  }
}
let deleteButtons1 = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function () {
    deleteButtons[i].parentElement.remove();
  });
}

let heartButtons = document.getElementsByClassName("fa-solid fa-heart");



for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function (event) {
    event.target.classList.toggle("text-red-500"); // Toggle red color class
    console.log(event.target);
  });
}

