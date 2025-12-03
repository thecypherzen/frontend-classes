import { createNewProduct } from "./utils.js";

const PRODUCTS = [];

const form = document.getElementById("product-form");
form?.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  const formEntries = new FormData(event.target);
  const data = Object.fromEntries(formEntries.entries());
  console.log(data);
  const newProduct = createNewProduct(data);
  PRODUCTS.push(newProduct);
  console.table(PRODUCTS);
}
