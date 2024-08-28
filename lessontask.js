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
