/* Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous. Ecrivez une fonction mostSkilledDev qui prendra comme paramètre 2 objets, parmi alice, bob et charlie et qui retournera le firstName de la personne qui connait le plus de langages de programmation.
En cas d'égalité draw sera retourné. */

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
    languages: ['Javascript', 'Python'],
    age: 30,
}

const charlie = {
    firstName: 'Charlie',
    lastName: 'Charlot',
    age: 8,
    languages: ['Aucun'],
}

const mostSkilledDev = (person) => {
    if (alice.languages.length > bob.languages.length) {
        console.log(`${alice.firstName} connait plus de langages que ${bob.firstName}.`)
      } else if (alice.languages.length < bob.languages.length) {
        console.log(`${alice.firstName} connait moins de langages que ${bob.firstName}.`)
      } else {
        console.log(`${alice.firstName} and ${bob.firstName} connaissent le même nombre de langages.`)
      }    
}

mostSkilledDev()
