const cvs = document.getElementById("pong") ;
const ctx = cvs.getContext("2d") ;

// create player 1 paddle paddle
const player1 = {
  x : cvs.width - 10 ,
  y : cvs.height / 2 - 100 / 2 ,
  width : 10 ,
  height : 100 ,
  color : "WHITE" ,
  score : 0
}const cvs = document.getElementById("pong") ;
const ctx = cvs.getContext("2d") ;

// create player 2 paddle paddle
const player2 = {
  x : cvs.width - 10 ,
  y : cvs.height / 2 - 100 / 2 ,
  width : 10 ,
  height : 100 ,
  color : "WHITE" ,
  score : 0
}

// draw rect function
function drawRect( x , y , w , h , color){
  ctx.fillStyle = color ;
  ctx.fillRect( x , y , w , h )
} ;

drawRect( 0 , 0 , cvs.width , cvs.height , "BLACK" )

// draw circle function
function drawCircle( x , y , r , color ){
  ctx.fillStyle = color ;
  ctx.beginPath() ;
  ctx.arc( x , y , r , 0 , Math.PI * 2 , false) ;
  ctx.closePath() ;
  ctx.fill() ;
} ;

drawCircle( 100 , 100 , 50 , "WHITE")

// draw text
function drawText( text , x , y , color){
  ctx.fillStyle = color ;
  ctx.font = "45px fantasy" ;
  ctx.fillText( text , x , y) ;
} ;

drawText( "This is test text." , 300 , 200 ) ;


// draw rect function
function drawRect( x , y , w , h , color){
  ctx.fillStyle = color ;
  ctx.fillRect( x , y , w , h )
} ;

drawRect( 0 , 0 , cvs.width , cvs.height , "BLACK" )

// draw circle function
function drawCircle( x , y , r , color ){
  ctx.fillStyle = color ;
  ctx.beginPath() ;
  ctx.arc( x , y , r , 0 , Math.PI * 2 , false) ;
  ctx.closePath() ;
  ctx.fill() ;
} ;

drawCircle( 100 , 100 , 50 , "WHITE")

// draw text
function drawText( text , x , y , color){
  ctx.fillStyle = color ;
  ctx.font = "45px fantasy" ;
  ctx.fillText( text , x , y) ;
} ;

drawText( "This is test text." , 300 , 200 ) ;
