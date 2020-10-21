const cvs = document.getElementById("pong") ;
const ctx = cvs.getContext("2d") ;

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
