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
    console.log(this.sound);
  }

}

class Dog extends Animal{
  speak()   {
    console.log("New sound: woof");
  }
}

//var dog= new Animal("dog","Joey");
var dog=new Dog("dog","Henry");
console.log(dog);
dog.speak();
