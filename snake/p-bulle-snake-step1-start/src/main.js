import { initSnake, moveSnake, drawSnake, AddSnakeBody } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange, gamepause } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore, drawPause, drawScorePause, drawGameover} from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;
const gameSpeed = 200;
let snake;
let gamestop;
gamestop = Boolean;
gamestop = false;
let food;
let head;   
let i = 0;
let direction = "RIGHT";
let score = 0;
let conrtolWallcolision;
conrtolWallcolision = Boolean;
let conrtolcolision;
conrtolcolision = Boolean;
let foodcontrole = true;
foodcontrole = Boolean;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction, gamestop);
  gamestop = gamepause(gamestop, event); 
});



  
function startGame() {
  snake = initSnake();
  food = { x: 200, y: 200 };
  for (let i = 0; i < 2; i++) {
    AddSnakeBody(snake);    
  }

  gameInterval = setInterval(() => { 
    draw();
  }, gameSpeed); // Stockage de l'identifiant de l'intervalle 
}

 

function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  drawFood(ctx, food, box);
  drawSnake(ctx, box, snake);
  if (gamestop != true)
  {
    drawScore(ctx, score);
    if (i < 1) {
      moveSnake(snake, direction, box, gamestop);
      head = { x: snake[0].x, y: snake[0].y };
      i++;
    } else {
      conrtolcolision = checkCollision(head, snake);
      conrtolWallcolision = checkWallCollision(head, box);
      if (conrtolWallcolision == true || conrtolcolision == true) {
        
        clearInterval(gameInterval);
        ctx.clearRect(0,0,canvas.width, canvas.height)
        drawGameover(ctx,score)
        drawScorePause(ctx,score)
      } else {
        moveSnake(snake, direction, box, gamestop);
        head = { x: snake[0].x, y: snake[0].y };
      }
    }
    if (snake[0].x == food.x && snake[0].y == food.y) {
      // manger la pomme
      score++;
      AddSnakeBody(snake);
      // regénérer une pomme qui n'est pas sur le snake
      food = generateFood(box, canvas, snake);
    } 
  }
  else
  {
    drawPause(ctx)
    drawScorePause(ctx, score);
  }
}
 
startGame();
