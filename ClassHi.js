const Dog = require('./ClassDog');
const Cat = require('./ClassCat');

class Hi {
  constructor(number) {
    this.number = number;
  }
  play(){
    new Dog().sound(); 
    new Cat().sound();
  }
}

module.exports = Hi