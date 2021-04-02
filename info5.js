/* Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous. Ecrivez une fonction mostSkilledDev qui prendra comme paramètre 2 objets, parmi alice, bob et charlie et qui retournera le firstName de la personne qui connait le plus de langages de programmation.
En cas d'égalité draw sera retourné. */

/* Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous. Faites preuve d'imagination et ajouter à chacun des objets une propriété language qui sera un tableau de string qui contiendra la liste de tous les langages de programmation que Alice, Bob et Charlie connaissent. */

const alice = {
  firstName: 'Alice',
  lastName : 'Liddell',
  age: 28,
  language: ['Javascript', 'Ruby'],
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  language: ['Javascript', 'Python'],
  age: 30,
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Aucun'],
}

const mostSkilledDev = (person1, person2) => {
  if (person1.language.length > person2.language.length) {
    return `${person1.firstName} connait plus de langages que ${person2.firstName}.`
  } else if (person1.language.length < person2.language.length) {
    return `${alice.firstName} connait moins de langages que ${bob.firstName}.`
  } else {
    return `${person1.firstName} and ${person2.firstName} connaissent le même nombre de langages.`
  }    
}

console.log(mostSkilledDev(alice, bob))

