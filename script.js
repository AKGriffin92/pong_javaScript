const cvs = document.getElementById("pong") ;
const ctx = cvs.getContext("2d") ;

// create player 1 paddle paddle
const player1 = {
  x : 0 ,
  y : ( cvs.height - 100 ) / 2 ,
  width : 10 ,
  height : 100 ,
  color : "WHITE" ,
  score : 0
} ;

// create player 2 paddle paddle
const player2 = {
  x : cvs.width - 10 ,
  y : ( cvs.height - 100 ) / 2 ,
  width : 10 ,
  height : 100 ,
  color : "WHITE" ,
  score : 0
}

// create the ball
const ball = {
  x : cvs.width / 2 ,
  y : cvs.height / 2 ,
  radius : 10 ,
  speed : 5 ,
  velocityX : 5 ,
  velocityY : 5 ,
  color : "WHITE"
} ;

// draw rect function
function drawRect( x , y , w , h , color){
  ctx.fillStyle = color ;
  ctx.fillRect( x , y , w , h )
} ;

// create the net
const net = {
  x : ( cvs.width - 2 ) / 2 ,
  y : 0 ,
  width : 2 ,
  height : 10 ,
  color : "WHITE"
} ;

// draw the net
function drawNet() {
  for( let i = 0 ; i < cvs.height ; i += 15 ) {
    drawRect( net.x , net.y + i , net.width , net.height , net.color )
  } ;
} ;

// draw circle function
function drawCircle( x , y , r , color ){
  ctx.fillStyle = color ;
  ctx.beginPath() ;
  ctx.arc( x , y , r , 0 , Math.PI * 2 , false) ;
  ctx.closePath() ;
  ctx.fill() ;
} ;

// draw text
function drawText( text , x , y , color){
  ctx.fillStyle = color ;
  ctx.font = "45px fantasy" ;
  ctx.fillText( text , x , y) ;
} ;

// render the game
function render() {
  // clear the canvas
  drawRect( 0 , 0 , cvs.width , cvs.height , "BLACK" )

  // draw the net
  drawNet() ;

  // drawScore
  drawText( player1.score , cvs.width / 4 , cvs.height / 5 , "WHITE" )
  drawText( player2.score , cvs.width / 4 * 3 , cvs.height / 5 , "WHITE" )

  // draw player paddles
  drawRect( player1.x , player1.y , player1.width , player1.height , player1.color )
  drawRect( player2.x , player2.y , player2.width , player2.height , player2.color )

  // draw the ball
  drawCircle( ball.x , ball.y , ball.radius , ball.color )
} ;

// update : pos, mov, score, ...
function update() {
  ball.x += ball.velocityX ;
  ball.y += ball.velocityY ;

  if( ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0 ) {
    ball.velocityY *= -1 ;
  } ;
} ;

// game init
function game() {
  update() ;
  render() ;
} ;

//loop
const framePerSecond = 50 ;
setInterval( game , 1000 / framePerSecond)
