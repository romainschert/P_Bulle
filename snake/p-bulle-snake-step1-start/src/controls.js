/**
 * Gère le changement de direction du serpent en fonction de l'entrée de l'utilisateur.
 *
 * Cette fonction est appelée chaque fois qu'une touche directionnelle est pressée.
 * Elle vérifie que la nouvelle direction n'est pas opposée à la direction actuelle
 * (pour éviter que le serpent se retourne sur lui-même) et retourne la nouvelle direction
 * si elle est valide.
 *
 * @param {KeyboardEvent} event - L'événement clavier qui contient les informations sur la touche pressée.
 * @param {string} currentDirection - La direction actuelle du serpent (peut être "UP", "DOWN", "LEFT", ou "RIGHT").
 * @returns {string} - La nouvelle direction du serpent après traitement, ou la direction actuelle si le changement n'est pas valide.
 */
export function handleDirectionChange(event, currentDirection) {
  let direction;
  if (event.code == "ArrowRight" && currentDirection !== "Left") {
    direction = "RIGHT";
  } else if (event.code == "ArrowLeft") {
    direction = "Left";
    if (currentDirection == direction) {
      direction = currentDirection;
    }
  } else if (event.code == "ArrowUp") {
    direction = "Up";
    if (currentDirection == direction) {
      direction = currentDirection;
    }
  } else if (event.code == "ArrowDown") {
    direction = "Down";
    if (currentDirection == direction) {
      direction = currentDirection;
    }
  }
  return direction;
}

export function gamepause(gamestop, event)
{
  if ( event.code == "Space"){
    if (gamestop == true){
      gamestop = false
    }
    else{
      gamestop = true
    }
    return gamestop;
  }
}
