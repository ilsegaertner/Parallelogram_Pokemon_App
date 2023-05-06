

let pokemonList = [
  {
    name: 'Butterfree', 
    height: 1.1,
    type: ['Bug', 'Flying'],
    number: 12
  }, 
  {
    name: 'Charizard', 
    height: 1.7,
    type: ['Fire', 'Flying'],
    number: 6
  }, 
  {
    name: 'Jigglypuff', 
    height: 0.5,
    type: ['Fairy', 'Normal'], 
    number: 39
  }
];
  
for (let i=0; i <pokemonList.length; i++) {

  if (pokemonList[i].height > 1.5) {
    document.write (" " + pokemonList[i].name + " " + '(' + 'Height:' + " " + pokemonList[i].height + ')' + " " + '(' + 'Type:' + " " + pokemonList[i].type + ')' + " " + 'Wow, that\'s big!!')
  } else {
  document.write (" " + pokemonList[i].name + " " + '(' + 'Height:' + " " + pokemonList[i].height + ')' + " " + '(' + 'Type:' + " " + pokemonList[i].type + ')')
}

}







/*

let person1 = {firstName:'Thomas', lastName:'Bernat', age: 31};
let person2 = {firstName:'Werner', lastName:'Loter', age: 10};
let person3 = {firstName:'Martin', lastName:'Sang', age: 67};
let person4 = {firstName:'Ebi', lastName:'Killes', age: 39};
let person5 = {firstName:'Azou', lastName:'Zupfert', age: 23};
let person6 = {firstName:'Ahmed', lastName:'Rissen', age: 45};
let person7 = {firstName:'Kerstin', lastName:'Langham', age: 14};
let person8 = {firstName:'Eva', lastName:'Secker', age: 56};
let person9 = {firstName:'Michael', lastName:'Rotweil', age: 23};

let persons = [person1, person2, person3, person4, person5, person6, person7, person8, person9];

for (let i=0; i < persons.length; i++) {console.log(persons[i]);}

*/