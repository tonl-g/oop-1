/* Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous. Créer une fonction printInfo qui prendra un objet en paramètre et qui affichera sur la console les informations concernant alice, bob ou charlie */

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

const printInfo = (person) => {
    console.log(`Firstname: ${person.firstName}`)
    console.log(`Lastname: ${person.lastName}`)
    console.log(`Age: ${person.age}`)
}
  
printInfo(alice)
printInfo(bob)
printInfo(charlie)

