/**
 * Take gamers input to play a jousting game!
 */

/**
 * Ask user if they would like to play 
 * @param prompt user 
 *  
 */

let startGame = prompt ('Would you like to challenge Grant the Great?');
if (startGame.toLowerCase() === 'yes'){
    confirm ('Let the games begin!')
  }else if (startGame.toLowerCase() !== 'yes'){
    alert ('WHAT?! You do not wish to challenge Grant the Great?! Be gone with you, I shall find a more worthy opponent.')
    die;
}

/**
 * Prompt user for their name
 */
let firstName = prompt("Please enter your name");

 const userName = firstName
 let grantHealth = 10;
 let userHealth = 40;
 let grantDeaths = 0;

/**
 * Game logic pitting userHealth vs. grantDeath count using randomNumber to up the defeat by 1 or 2 pts.
 * @param while loop  
 */
 while(userHealth > 0 && grantDeaths < 3) {
    grantHealth -= randomNumber = Math.floor(Math.random() * 2 + 1);
    userHealth -= randomNumber = Math.floor(Math.random() * 2 + 1);
 
 /**
  * Log out damage + health remaining for both user and Grant the Great
  * @param console
  */
   console.log(`${userName} has ${userHealth} health left`)
    console.log(`Grant the Great has ${grantHealth} health left`)

/**
 * Replenish Grant's health and record his death toll
 * @param if statement
*/
    if(grantHealth <= 0){
        grantDeaths++;
        grantHealth = 10;
    }
 
}
/**
* Determine the winner. If user has run out of lives, Grant the Great is victorious. 
  If Grant the Great has died three times, the user is the winner. 
* @param if statement with console to confirm victor
*/
    if (userHealth <= 0) {
        console.log(`MWAHAHAHAHA GRANT THE GREAT HAS DEFEATED YOU PEASANT. ALL HAIL GRANT!`); 
        } else if (grantDeaths === 3) {
            console.log(`Congratulations ${userName}, you defeated Grant!`);
        
        }



/* ASSIGNMENT DIRECTIONS
Task: Prompt the user if they would like to play the game with two characters - the user and
the Almighty Grant. If yes, prompt the user to name their character. Run a while loop that will
iterate until either the character has beat Grant three times or the character has been
defeated.
What does the application do?
1. The user is prompted to play a game. If the user chooses yes, the user is prompted to
enter his or her name, and the battle begins. Otherwise, nothing else happens.
2. The game will use a while loop to simulate a turn-based fight between the user and
Grant.
3. The user starts with 40 “health points.” Grant starts with 10 “health points.”
4. Each iteration of the while loop will remove random numbers of health points (either 1
or 2) from both the user and Grant.
5. Each time Grant’s health points hit 0, he is “defeated” and the user gains 1 “win.” But
Grant’s health points are reset to 10. Note: the user’s health points never reset.
6. The game ends when either a) Grant has been defeated three times (i.e.,, the user has
three wins) or b) the user has been defeated (hit 0 health points).
7. When the game is over, the application logs the winner. 


 */ 
