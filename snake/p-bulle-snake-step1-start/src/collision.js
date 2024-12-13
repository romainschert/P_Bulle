/**
 * Vérifie si la tête du serpent entre en collision avec son propre corps.
 *
 * Cette fonction détermine si la tête du serpent occupe la même position que
 * n'importe quel autre segment de son corps. Si la tête du serpent se trouve
 * aux mêmes coordonnées `x` et `y` qu'un autre segment, la fonction retourne `true`,
 * indiquant une collision avec le corps du serpent (c'est-à-dire que le serpent se mord la queue).
 *
 * @param {{x: number, y: number}} head - Un objet représentant les coordonnées `x` et `y` de la tête du serpent.
 * @param {Array<{x: number, y: number}>} snakeArray - Un tableau d'objets représentant les segments du serpent, où chaque objet contient des coordonnées `x` et `y`.
 * @returns {boolean} - Retourne `true` si la tête du serpent entre en collision avec un segment de son corps, sinon `false`.
 */
export function checkCollision(head, snake) {
  let CheckCollision;
  CheckCollision = Boolean;
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x == head.x && snake[i].y == head.y) {
      CheckCollision = true;
      return (CheckCollision = true);
    } else {
      CheckCollision = false;
    }
  }
  return CheckCollision;
}
/**
 * Vérifie si la tête du serpent entre en collision avec les murs du canvas.
 *
 * Cette fonction détermine si la tête du serpent a dépassé les limites du canvas,
 * ce qui signifierait une collision avec un mur. Si la tête du serpent sort du canvas
 * (c'est-à-dire si ses coordonnées `x` ou `y` sont en dehors des limites définies par
 * la largeur et la hauteur du canvas), la fonction retourne `true`, indiquant une collision.
 *
 * @param {{x: number, y: number}} head - Un objet représentant les coordonnées `x` et `y` de la tête du serpent.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer les limites du déplacement du serpent.
 * @returns {boolean} - Retourne `true` si la tête du serpent entre en collision avec un mur, sinon `false`.
 */
export function checkWallCollision(head, box) {
  let checkWallCollision;
  checkWallCollision = Boolean;
  if (head.y > 400 - box) {
    checkWallCollision = true;
  } else if (head.x > 400 - box) {
    checkWallCollision = true;
  } else if (head.x < 0) {
    checkWallCollision = true;
  } else if (head.y < 0) {
    checkWallCollision = true;
  } else {
    checkWallCollision = false;
  }

  return checkWallCollision;
}
