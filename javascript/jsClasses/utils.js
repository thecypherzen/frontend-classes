let ID = 0;

export class Product {
  constructor({ title, price, description, category }) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.id = null;
  }

  setId() {
    ID += 1;
    this.id = ID;
  }

  static get() {}

  get getId() {}
}

export function createNewProduct(productInfo) {
  console.log(productInfo);
  const newProduct = new Product(productInfo);
  newProduct.setId();
  return newProduct;
}
