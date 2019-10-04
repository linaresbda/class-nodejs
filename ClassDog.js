class Dog {
  constructor(name, color) {
    this.carname = name;
    this.color = color;
  }
  hi(){
    console.log('Hi from Dog');
  }
  sound(){
    console.log('Guau.. guau..');
  }
}

module.exports = Dog;