/* Traduire votre script info.js pour utiliser une classe, et donc des instances de classes, au lieu object literals.

la classe devra se nommer Human
il faudra un constructeur qui initialisera donc firstName, lastName, age, et language
les fonctions printInfo, canVote, mostSkilledDev seront désormais des méthodes de cette classe */

class Human {
    constructor(firstName, lastName, age, language) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.language = language
    }
printInfo() {
    console.log(`Firstname: ${this.firstName}`)
    console.log(`Lastname: ${this.lastName}`)
    console.log(`Age: ${this.age}`)
    console.log(`Langages: ${this.language}`)
    }
canVote() {
    if (this.age >= 18) {
        console.log(`${this.firstName} ${this.lastName} peut voter`)
    } else {
        console.log(`${this.firstName} ${this.lastName} ne peut pas voter`)
    }
}
/* mostSkilledDev() {
    if (this.language.length > this.language.length) {
        console.log(`${this.firstName} connait plus de langages que ${this.firstName}.`)
      } else if (this.language.length < this.language.length) {
        console.log(`${this.firstName} connait moins de langages que ${this.firstName}.`)
      } else {
        console.log(`${this.firstName} and ${this.firstName} connaissent le même nombre de langages.`)
      }    
} */
}

const alice = new Human('Alice', 'Liddell', 27, ['Javascript', 'Ruby'])
const bob = new Human('Bob', 'Lemon', 30, ['Javascript', 'Python'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Aucun'])

alice.printInfo()

alice.canVote()
charlie.canVote()

// alice.mostSkilledDev()
