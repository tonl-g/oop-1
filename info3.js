/* Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous. Créer une fonction canVote qui prendra un objet en paramètre et qui retourne true si la personne peut voter ou false sinon.
Par exemple canVote(alice) retournera true et canVote(charlie) retournera false.
La majorité est à 18 ans. */

const alice = {
  firstName: 'Alice',
  lastName : 'Liddell',
  age: 28,
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
}

const canVote = (person) => { // Return true or false
  return person.age >= 18 ? true : false
}

console.log(canVote(alice))
console.log(canVote(charlie))

/* const canVote = (person) => {
  if (person.age >= 18) {
    console.log(`${person.firstName} peut voter`)
  } else {
    console.log(`${person.firstName} ne peut pas voter`)
  }
}

canVote(alice)
canVote(charlie) */

/* class Person {
  constructor(firstName, lastName,age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
canVote() {
  if (this.age >= 18) {
    console.log(`${this.firstName} ${this.lastName} peut voter`)
  } else {
    console.log(`${this.firstName} ${this.lastName} ne peut pas voter`)
  }
}
}

const alice = new Person('Alice', 'Liddell', 27)
const charlie = new Person('Charlie', 'Charlot', 8)

alice.canVote()
charlie.canVote() */
