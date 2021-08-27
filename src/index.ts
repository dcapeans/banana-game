const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const scoreContainer: HTMLParagraphElement = document.querySelector('#score');
const game: HTMLDivElement = document.querySelector('#screen');
const heartsContainer: HTMLDivElement = document.querySelector('#hearts');

const screenWidth = game.clientWidth;
const screenHeight = game.clientHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;
