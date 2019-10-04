const Cat = require('./ClassCat');
const Hi = require('./ClassHi');
const Pets = require('./ClassPets');

//basic class
let catInstance = new Cat();
catInstance.carname = 'Diego';
console.log(catInstance);
catInstance.hi();

//join 2 class at 1 class
new Hi().play();
let ins1 = new Hi(1);
let ins2 = new Hi(2);
console.log(ins1);
console.log(ins2);
console.log(new Hi());

//class like Catalog
let petsIns = new Pets();
console.log(petsIns.getPets());
petsIns.setPet('snake');
console.log(petsIns.getPets());