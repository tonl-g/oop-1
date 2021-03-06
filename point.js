/* Améliorer la classe Point du cours en ajoutant une méthode distance pour calculer et retourner la distance entre 2 points.
La distance entre deux points peut se calculer en consultant: https://fr.wikipedia.org/wiki/Distance_entre_deux_points_sur_le_plan_cart%C3%A9sien
Pour calculer la racine carrée d'un nombre on utilise directement la méthode Math.sqrt:

Math.sqrt(9) // retourne 3
Pour mettre au carré une nombre on le multiplie par lui même ou sinon on utilise la méthode math.pow:

Math.pow(3, 2) // retourne 9, c'est a dire 3 au carré */

// Définit d'une classe Point
class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    show() {
      console.log(`(${this.x}, ${this.y})`)
    }
    isEqual(point) {
      return this.x === point.x && this.y === point.y ? true : false
    }
    distance() {
        
    }
  }
  // p1 est une instance de Point
  const p1 = new Point(1, 2)
  // p2 est une autre instance de Point
  const p2 = new Point(10, 11)