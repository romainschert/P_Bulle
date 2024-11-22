/**
 * Initialise le serpent au début du jeu.
 *
 * Cette fonction crée le serpent en tant que tableau contenant un seul segment,
 * positionné à une position de départ définie sur la grille.
 *
 * @returns {Array<{x: number, y: number}>} - Un tableau contenant un objet représentant la position du premier segment du serpent.
 */
export function initSnake() {
  let head = {x: 0, y: 0}
  let returnposition = [head]
  return returnposition;
}

/**
 * Déplace le serpent dans la direction actuelle.
 *
 * Cette fonction calcule la nouvelle position de la tête du serpent en fonction
 * de la direction actuelle (gauche, haut, droite, bas). Le reste du corps du serpent
 * suit la tête. La fonction retourne un objet représentant la nouvelle position de la tête du serpent.
 *
 * @param {Array<{x: number, y: number}>} snake - Le tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {string} direction - La direction actuelle du mouvement du serpent ("LEFT", "UP", "RIGHT", ou "DOWN").
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la distance de déplacement du serpent.
 * @returns {{x: number, y: number}} - Un objet représentant les nouvelles coordonnées `x` et `y` de la tête du serpent après le déplacement.
 */
export function moveSnake(snake, direction, box) {
  for (let i = snake.length -1; i > 0; i--)
    {
      snake[i].x = snake[i - 1].x
      snake[i].y = snake[i - 1].y
    }
  if(direction == "Down") // si la direction le snake vas ver le bas
  {
    if(snake[0].y<400-box)
    snake[0].y += box; 
  }
  else if(direction == "RIGHT")
  {
    if(snake[0].x<400-box)
    snake[0].x += box;
  }
  else if(direction == "Left")
  {
    if(snake[0].x>0)
    snake[0].x -= box;
  }
  else if(direction == "Up")
  {
    if(snake[0].y>=box)
    snake[0].y -= box;
  }
}

/**
 * Dessine le serpent sur le canvas.
 *
 * Cette fonction parcourt chaque segment du serpent et le dessine sur le canvas en utilisant
 * un rectangle coloré. La tête du serpent est dessinée dans une couleur différente des autres segments
 * pour la distinguer visuellement. Chaque segment est dessiné à sa position actuelle sur la grille,
 * avec une taille déterminée par la valeur de `box`.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {Array<{x: number, y: number}>} snake - Un tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de chaque segment du serpent.
 */
export function drawSnake(ctx, box, snake) {
  for (let i = 0; i < snake.length; i++)
  {
    if(i == 0)
    {
      ctx.fillStyle = "green"; // defini la couleur du rectangle
    }
    else
    {
      ctx.fillStyle = "light green"
    }
    ctx.fillRect(snake[i].x,snake[i].y, box, box) //defini la position x et Y et ça taille 
    ctx.strokeRect(snake[i].x,snake[i].y, box, box)
  }
    
}
export function AddSnakeBody(snake) { 
  const lastSegment = snake[snake.length - 1]; // Le dernier segment du serpent
  let newSegment = { x: lastSegment.x, y: lastSegment.y }; // Copie des coordonnées du dernier segment
  snake.push(newSegment);
  console.log(snake)
}

