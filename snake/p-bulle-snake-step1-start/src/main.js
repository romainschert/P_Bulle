import { initSnake, moveSnake, drawSnake, AddSnakeBody } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;
const gameSpeed = 200;
let snake;
let food;
let head;
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
  direction = handleDirectionChange(event, direction);
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
  drawScore(ctx, score);
  head = { x: snake[0].x, y: snake[0].y };
  conrtolWallcolision = checkWallCollision(head, box);
  conrtolcolision = checkCollision(head, snake);
  if (conrtolWallcolision == true) {
    clearInterval(gameInterval);
  } else {
    moveSnake(snake, direction, box);
  }

  if (snake[0].x == food.x && snake[0].y == food.y) {
    // manger la pomme
    score++;
    AddSnakeBody(snake);
    // regénérer une pomme qui n'est pas sur le snake
    food = generateFood(box, canvas, snake);
  }
}
startGame();
