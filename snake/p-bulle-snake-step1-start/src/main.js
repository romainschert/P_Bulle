import { initSnake, moveSnake, drawSnake, AddSnakeBody } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange, gamepause } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore, drawPause, drawScorePause, drawGameover, drawTimer} from "./score.js";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;
const gameSpeed = 200;
let snake;
let gamestop = false;
let Timer = 0;
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
  button.addEventListener("click", startGame)
});

replay.addEventListener("click", startGame)

  
function startGame() {
  replay.classList.add("d-none")
  direction = "RIGHT";
  i = 0;
  Timer = 0;
  score = 0;
  snake = initSnake();
  food = { x: 200, y: 200 };
  for (let j = 0; j < 2; j++) {
    AddSnakeBody(snake);    
  }
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  gameInterval = setInterval(() => { 
    draw();
  }, gameSpeed); // Stockage de l'identifiant de l'intervalle 
}

 

function draw() {
  Timer += gameSpeed
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  drawFood(ctx, food, box);
  drawSnake(ctx, box, snake);
  drawTimer(ctx,Timer);


  if (gamestop != true)
  {
    drawScore(ctx, score);


    if (i < 1) {
      moveSnake(snake, direction, box, gamestop);
      head = { x: snake[0].x, y: snake[0].y };
      i++;
    } 


    else {
      conrtolcolision = checkCollision(head, snake);
      conrtolWallcolision = checkWallCollision(head, box);
      if (conrtolWallcolision == true || conrtolcolision == true) {
        ctx.clearRect(0,0,canvas.width, canvas.height)
        drawGameover(ctx,score)
        replay.classList.remove("d-none")
        drawScorePause(ctx,score)
        clearInterval(gameInterval);

      } 
      else
      {
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
