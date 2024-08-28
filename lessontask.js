class Person {
    #firstName
    #lastName

    constructor(firstName, lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get firstName(){
        return this.#firstName
    }
    
    set firstName(newFirstName){
        this.#firstName = newFirstName
    }

    get lastName(){
        return this.#lastName
    }

    set lastName(newSecondName){
        this.#lastName = newSecondName
    }

    welcomeMessage(){
        console.log(`Welcome to our page ${this.firstName}${this.lastName}`)
    }
}

const newUser = new Person ("Ola", "Nordmann");

newUser.firstName = "Berk"
newUser.lastName = "TheTurk"

console.log(`New names: ${newUser.firstName} ${newUser.lastName}`)

newUser.welcomeMessage();


const n = 100;
let numbers = Array.from({length: 101}, (v, k) => k);
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let squareAll = Math.pow(sum, 2);

for (let i = 0; i <= n; i++) {
    console.log(squareAll)
}

let sumOfSquares = 0;

for (let i = 1; i <= 100; i++) {
    sumOfSquares += i ** 2;
}

console.log(sumOfSquares)

console.log(squareAll - sumOfSquares);

const finalAnswer = 25164150;







