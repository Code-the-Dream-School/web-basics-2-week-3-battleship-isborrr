const battleship = () => {
  // 1) Step 1: Create Players
  var Player1={                                             //Payer1
    name: " ",
    shipCount:4,
    gameBoard: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
   
}

var Player2={                                               //Payer2
  name: " ",
  shipCount:4,
  gameBoard: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

}
Player1.name = prompt("Player 1 : Enter your Name");
Player2.name= prompt("Player 2 : Enter your Name");

//## Step 2: Randomly Add Ships to each Board

 function shipBaordLoader(Player) {                         // function for loading a player information
    var randomCount=0;
    while(true){
      var randomX=Math.floor(Math.random()*4);
      var randomY=Math.floor(Math.random()*4);
      if(parseInt(Player.gameBoard[randomX][randomY])!==1){
          Player.gameBoard[randomX][randomY]=1;
          randomCount++;
          if (randomCount ==4){
          break;
                  }
          }
    }
    return Player.gameBoard;

}

shipBaordLoader(Player1);    // calling the function to laod Player1 information 
shipBaordLoader(Player2);   // calling the function to laod Player2 information 
    
console.log(Player1.gameBoard.join(", "));  // loging the board on console for fast win
console.log(Player2.gameBoard.join(", "));
 

var curentPlayer;                          // Player declaretion to be able to switch between players                 
var guestPlayer;

 for(i=0 ; ; i++){                         // infinite loop : it will end when a break is reached
      //first Player
      if(i%2==0){
        curentPlayer = Player1;
        guestPlayer  = Player2;
      }else{
      //second Player
        curentPlayer = Player2;
        guestPlayer = Player1;
      }
      var xCoor= prompt(`${curentPlayer.name } :enter the X coordinate:`);
      var yCoor= prompt(`${curentPlayer.name } :enter the y coordinate:`);
      if(parseInt(guestPlayer.gameBoard[xCoor][yCoor])===1){
            alert('Hit!');
            guestPlayer.shipCount--;
            guestPlayer.gameBoard[xCoor][yCoor]=0;
            if(parseInt(guestPlayer.shipCount)===0){
            // winner=curentPlayer and we will break;
              break;
            } 
      }else{
        alert("Miss!");
    }
     
 }



return `The winner ${curentPlayer.name.toUpperCase()} :CONGRATULATION`;
}


const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
