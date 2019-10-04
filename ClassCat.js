class Cat {
  constructor(name, color) {
    this.carname = name;
    this.color = color;
  }
  hi(){
    console.log('Hi from Cat');
  }
  sound(){
    console.log('Miau.. miau..');
  }
}

module.exports = Cat