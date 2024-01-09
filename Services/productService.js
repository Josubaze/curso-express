const { faker } = require('@faker-js/faker');

class ProductService{

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id : faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.avatar(),
      });
    }
  }

  async create(data){
    const newProduct = {
      id : faker.string.uuid(),
      ...data,
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id){
    const name = getTotal();
    return this.products.find( item => item.id === id );
  }

  async update(id, change){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('No se ha encontrado ID');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...change,
    }
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('No se ha encontrado ID');
    }
    this.products.splice(index,1);
    return { id };
  }
}

module.exports = ProductService;
