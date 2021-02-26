//Global Variables/Arrays
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// function to generate random numeric value and return it
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function with enemyName as parameter
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney)
        break;
      }
    }
    
      // sets random value to playerAttack
      var damage = randomNumber(playerAttack - 3, playerAttack);
      // remove enemy's health by subtracting the amount set in the damage variable 
      enemyHealth = Math.max(0, enemyHealth - damage);
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
      
      // sets value of var damage to enemyAttack
      var damage = randomNumber(enemyAttack - 3, enemyAttack);
      // remove players's health by subtracting the amount set in the damage variable
      playerHealth = Math.max(0, playerHealth - damage);
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
};

//function to start a new game
var startGame = function() {
  
  // resets player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  
  for(var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
          //let player know what round they are in
          window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
    
          // pick new enemy to fight based on the index of the enemyNames array
          var pickedEnemyName = enemyNames[i];

          // reset enemyHealth before starting new fight
          enemyHealth = randomNumber(40, 60);
    
         //debugger for code check
          //debugger; 

          // pass the pickedEnemyname variable's value into the fight fuction where it will assume the value of the enemyName parameter
          fight(pickedEnemyName);
    
    //if player isn't alive, stop the game
      } else {
        window.alert("You have lost your robot in battle! Game Over!");
    }
  }
  // play again
  //startGame();
  //after loop ends, player is either out of health or enemies to fight, so run endGame function
  endGame();
}

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they would like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }

};

// function to generate a random numeric value and return it
var randomNumber = function(min, max) {
  //when calling function, min and max values would be added at call
  //so for enemyHealth above would be randomNumber(40, 60)
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};



// start the game when the page loads
startGame();


