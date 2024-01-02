const { faker } = require('@faker-js/faker');

class UserService{

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      });
    }
  }

  async create(data){
    const newUser = {
      id : faker.string.uuid(),
      ...data,
    }
    this.users.push(newUser);
    return newUser;
  }

  async find(){
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(this.users);
      }, 5000);
    });
  }

  async findOne(id){
    return this.users.find( item => item.userId === id );
  }

  async update(id, change){
    const index = this.users.findIndex(item => item.userId === id);
    if(index === -1){
      throw new Error('No se ha encontrado ID');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...change,
    }
    return this.users[index];
  }

  async delete(id){
    const index = this.users.findIndex(item => item.userId === id);
    if(index === -1){
      throw new Error('No se ha encontrado ID');
    }
    this.users.splice(index,1);
    return { id };
  }
}



module.exports = UserService;
