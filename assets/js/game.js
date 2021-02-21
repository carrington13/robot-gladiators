var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that the are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Fight or Skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chose to fight, then fight

    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of 'playerAttack' from value of 'enemyHealth' and
        enemyHealth = enemyHealth - playerAttack;
    
        //Log a resulting message to the console so we know that it worked.
        console.log( 
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
        );
    
        //checks enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth +" health left.");
        }
    
        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and
        playerHealth = playerHealth - enemyAttack;
    
        //Log a resulting message to the console so we know that it worked.
        console.log( 
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." 
        ); 
    
        //Check player's health
        if (enemyHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth +" health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
    
};

fight();

// enemyHealth - playerAttack = playerHealth;
//console.log(playerHealth);