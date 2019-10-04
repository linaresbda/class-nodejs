class Pets {
  constructor(){};
  getPets(){
    return petsList;
  }

  setPet(pet){
    petsList.push(pet);
  }
}

let petsList = [
  'Dog',
  'Cat'
];

module.exports = Pets;