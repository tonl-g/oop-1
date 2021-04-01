/* Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous. Faites preuve d'imagination et ajouter à chacun des objets une propriété language qui sera un tableau de string qui contiendra la liste de tous les langages de programmation que Alice, Bob et Charlie connaissent. */

const alice = {
    firstName: 'Alice',
    lastName : 'Liddell',
    age: 28,
    languages: ['Javascript', 'Ruby'],
}

const bob = {
    firstName: 'Bob',
    lastName: 'Lemon',
    languages: ['Javascript'],
    age: 30,
}

const charlie = {
    firstName: 'Charlie',
    lastName: 'Charlot',
    age: 8,
    languages: ['Aucun'],
}

const printInfo = (person) => {
    console.log(`Firstname: ${person.firstName}`)
    console.log(`Lastname: ${person.lastName}`)
    console.log(`Age: ${person.age}`)
    console.log(`Langages: ${person.languages}`)
}
  
printInfo(alice)
printInfo(bob)
printInfo(charlie)