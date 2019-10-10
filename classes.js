class Animal {
  //this is a method
  constructor(species,name){
    //this is a property
this.species=species.toLowerCase();
this.name=name;
this.height=32;
this.sound="woof";
  }
  speak(){
    console.log("ANIMAL");
    //console.log(this.sound);
  }
  setName(name){
  this.name=name;
  }
  setSpecies(species){
    this.species=species;
  }
}
//Creates a new class based on the Animal blueprint
class Dog extends Animal{
  //overwrite the speak() method
  speak()   {
    super.speak();
    console.log("DOG");
  }
}
class Cat extends Dog{
  //overwrite the speak() method
  speak()   {
    super.speak();
    console.log("CAT");
  }
}
//var dog= new Animal("dog","Joey");
var cat=new Cat("Henry");
cat.speak();
