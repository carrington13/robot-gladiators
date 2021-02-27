


//fight function with enemy.name as parameter
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerMoney", playerInfo.money)
        break;
      }
    }
    
      // sets random value to playerInfo.attack
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      // remove enemy's health by subtracting the amount set in the damage variable 
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
      
      // sets value of var damage to enemy.attack
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      // remove players's health by subtracting the amount set in the damage variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
};

//function to start a new game
var startGame = function() {
  
  // resets player stats
  playerInfo.reset();
  
  for(var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
          //let player know what round they are in
          window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
    
          // pick new enemy to fight based on the index of the enemy.names array
          var pickedEnemyObj = enemyInfo[i];

          // reset enemy.health before starting new fight
          pickedEnemyObj.health = randomNumber(40, 60);
    
         //debugger for code check
          //debugger; 

          // pass the pickedenemy.name variable's value into the fight fuction where it will assume the value of the enemy.name parameter
          fight(pickedEnemyObj);

    //if player isn't alive, stop the game
      } else {
        window.alert("You have lost your robot in battle! Game Over!");
      }

      // if player has health and there is an enemy left, call shop 
      if (playerInfo.health > 0 && i < enemyInfo.length -1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm

        //if yes, take them to store() function
        if (storeConfirm) {
        shop();
        }
      }
  }
  // play again
  //startGame();
  //after loop ends, player is either out of health or enemies to fight, so run endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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

// Shop Function
var shop = function() {
  // ask the player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', UPGRADE', 'LEAVE' to make a choice."
  );
  
  //use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      window.alert("Refilling player's health by 20 for 7 dollars.");
      // calls playerInfo.method to refill health
      playerInfo.refillHealth();
      break;
    case "UPGRADE":
    case "upgrade":
      // call playerInfo.upgradeAttack()
      playerInfo.upgradeAttack();
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;
    
    default:
      window.alert("You did not pick a valid option. Try again");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

// function to generate a random numeric value and return it
var randomNumber = function(min, max) {
  //when calling function, min and max values would be added at call
  //so for enemy.health above would be randomNumber(40, 60)
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

//Global Variables/Arrays
var playerInfo = {
  health: 100,
  attack: 10,
  money: 10, 
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!")
    }
  }
  }
  
  /*var enemy.names = ["Roborto", "Amy Android", "Robo Trumble"];
  var enemy.health = 50;
  var enemy.attack = 12;*/
  
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14),
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14),
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14),
    }
  ];

// start the game when the page loads
startGame();


