//You wont build classes as much in frontend development
//classes is more used in the backend to interact with databases

// orange and pink red Kjetil can't see
class Duck { 
  // fields / properties
  #id;
  #name;
  #temperament;
  #secretKey = "ducksaregreat1234";
  static duckObserver = "Paul"

  // constructor
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    this.#temperament = "Uncertain"; 
  }

  // methods
  //#region getters and setters
  set temperament(value) {
    console.log("trying to update temperament")
    this.#temperament = value;
  }

  get temperament (){
    return this.#temperament
  }

  get id(){
    return this.#id
  }

  get name(){
    return this.#name
  }

  setName(value, secretKey){
    if(this.#secretKey === true){
      this.#name = value
    }
    else {
      console.log("Acces denied")
    }
  }

  Quack(){
    console.log(`${this.#name} is totally quacking quack`)
  }

  #someSecretOperation(){
    console.log("shhhhh")
  }

  static moveDuck(){
    console.log("move that duck!!")
  }
}

const duck1 = new Duck(1, "sptheven");

const duck2 = new Duck(2, "Maximmus");

console.log(duck1);

console.log(duck2);

duck2.weight = "190"

duck2.temperament = "bit of a douche";

console.log(duck2)

console.log("Ducks id is: 2")

// duck1.name("Sptheven")

console.log(duck1.habitat)

duck1.Quack()
duck2.Quack()
// duck1.someSecretOperation ()--> wont work
duck1.setName("Sptheven")

console.log(Duck.duckObserver)

Duck.moveDuck()

class Calculator {
  static add (num1, num2){
    return num1+num2
  }
} 

console.log(Calculator.add(2,6))

class codeGenerator{

  static generateCode(){

  }
}

codeGenerator.generateCode()

// Function constructors

function legacyHuman (brainsValue){
  this.brains = brainsValue

}

// Adding methods to the prototype
legacyHuman.prototype.haveFun = function (){
  console.log("Have some fun woop woop doing stuff")
}

legacyHuman.prototype.sleep = function (){
  console.log("Sleeping...")
}

legacyHuman.prototype.eat = function (){
  console.log("Eating....")
} 

const legacyHumanObj = new legacyHuman("Some decent brains and rizz")
legacyHumanObj.haveFun()
console.log(legacyHumanObj)

const legacyHumanObjTwo = new legacyHuman("Some decent brains and rizz")
legacyHumanObj.haveFun()
console.log(legacyHumanObj)

/*class student extends Human {
  ambition;
  constructor(ambitionValue, brainsValue){
    super(brainsValue);
    this.ambition = ambitionValue;
  }
}*/


// function legacyStudent(ambitionValue, brainsValue){
//   this.ambition = ambitionValue;
//   legacyHuman.call(this,brainsValue);
// }

// legacyStudent.prototype = Object.create(legacyHuman.prototype)
// legacyStudent.prototype.eat = function(){
//   console.log("Drinking and gen alpha")
// }

// const legacyStudentObj  = new legacyStudent(5, "dec")
// legacyStudent

// function public(){
//   let private = "Dirty secret"

//   return {
//     publicField:"All access"
//     setPrivate: function(privateValue){
//       private = privateValue;
//     }
//   }
//   }

// const someObject = public()

// someObject.setPrivate("newrivat")
// someObject.publicField()

(function () {
  console.log("IIFEs are declarations");
})();
