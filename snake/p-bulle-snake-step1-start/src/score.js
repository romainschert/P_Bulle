/**
 * Dessine le score sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
export function drawScore(ctx, score) {
  ctx.font = "20px Arial"
  ctx.fillStyle = "black"
  ctx.fillText(score, 10, 20)
}

export function drawPause(ctx) {

  ctx.font = "40px Arial"
  ctx.fillStyle = "black"
  ctx.fillText("Pause", 150, 140 )
} 


export function drawScorePause(ctx, score) {
  ctx.font = "30px Arial"
  ctx.fillStyle = "black"
  ctx.fillText(score, 190, 180)
}

export function drawGameover(ctx){
  let position = document.getElementById("gameOver");
  position.innerHTML = deathScreen();

  ctx.font = "52px Arial"
  ctx.fillStyle = "black"
  ctx.fillText("game over",80, 130)
}
function deathScreen(){
  let gameOver = ["<button id = 'replay'>play again</button>"]
  return gameOver
}