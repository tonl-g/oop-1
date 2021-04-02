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
        return true
    } else {
        return false
    }
}
mostSkilledDev(human) {
    const length1 = this.language.length
    const length2 = human.language.length

    if (length1 > length2) {
      return this.firstName
    } else if (length1 < length2) {
        return human.firstName
    } else {
        return 'draw'
    }    
  }
}

const alice = new Human('Alice', 'Liddell', 27, ['Javascript', 'Ruby'])
const bob = new Human('Bob', 'Lemon', 30, ['Javascript', 'Python'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Aucun'])

alice.printInfo()

console.log(alice.canVote())
console.log(charlie.canVote())

console.log(alice.mostSkilledDev(bob));




