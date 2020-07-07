const battleship = () => {
  // 1) Step 1: Create Players
  var Player1={
    name: " ",
    shipCount:4,
    gameBoard: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
   
}

var Player2={
name: " ",
shipCount:4,
gameBoard: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

}
Player1.name = prompt("Player 1 : Enter your Name");
Player2.name= prompt("Player 2 : Enter your Name");

//## Step 2: Randomly Add Ships to each Board
for(let i=0;i<+(Player1.shipCount);i++){
   var randomX=Math.floor(Math.random()*4);
   var randomY=Math.floor(Math.random()*4);
if(parseInt(Player1.gameBoard[randomX][randomY])!==1){
 Player1.gameBoard[randomX][randomY]=1;}}

 for(let j=0;j<+(Player2.shipCount);j++){
  var randomX=Math.floor(Math.random()*4);
  var randomY=Math.floor(Math.random()*4);
if(parseInt(Player2.gameBoard[randomX][randomY])!==1){
Player2.gameBoard[randomX][randomY]=1;}}
 
console.log(Player1.gameBoard.join(", "));
console.log(Player2.gameBoard.join(", "));
  // Players1.gameBoard[row][col]= Math.floor(Math.random()*4);
   //Players2.gameBoard[row][col]= Math.floor(Math.random()*4);
 
var winner;

 for(;;){
   //first player
  var xCoor= prompt(`${Player1.name } :enter the X coordinate:`);
  var yCoor= prompt(`${Player1.name } :enter the y coordinate:`);
  if(parseInt(Player2.gameBoard[xCoor][yCoor])===1){
        alert('Hit!');
        Player2.shipCount--;
Player2.gameBoard[xCoor][yCoor]=0;
        if(parseInt(Player2.shipCount)===0){
          winner=Player1;
          break;
        } 
  }else{
    alert("Miss!");
}
  //second player 
  var xCoor= prompt(`${Player2.name } :enter the X coordinate:`);
  var yCoor= prompt(`${Player2.name } :enter the y coordinate:`);
  if(parseInt(Player1.gameBoard[xCoor][yCoor])===1){
    alert('Hit!');
    Player1.shipCount--;
Player1.gameBoard[xCoor][yCoor]=0;
    if(parseInt(Player1.shipCount)===0){
      winner=Player2;
      break;
    }}else{
alert("Miss!");
}
     
 }



return `The winner ${winner.name.toUpperCase()} :CONGRATULATION`;
}


const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
