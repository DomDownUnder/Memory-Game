# Dom's Memory Card Game

## Wireframe

![Alt text](/readme-img/wireframe-memory.png)

## Description of the game

The Memory card game displays 24 cards that all have the same look at the beginning of the game. With every turn the player tries to find 2 cards that are identical. The intention of this game is to train the memory - the player is supposed to remember the position of each card, since the flip back around everytime when there was a failed attempt to find a match.

## Screenshots of the actual game

![Alt text](/readme-img/welcome-screenshot.png)
![Alt text](</readme-img/game-screenshot(1).png>)
![Alt text](</readme-img/game-screenshot(2).png>)
![Alt text](/readme-img/congratulation-screenshot.png)

## Background info

The first Memory Game in today's form was published by the German company Ravensburger in February 1959. Back in the 16th century, Japan had versions of this game in form of matching pictures painted on shells. (Source: https://board-games.fandom.com/wiki/Memory#:~:text=First%20published%20in%20today's%20form,Pairs%2C%20Pelmanism%2C%20or%20Concentration.)

## Game rules

• On the welcome screen you have to press the "Start Game" button to start the game.
• The grid has 4 rows and 6 columns, which means you have to find 12 matches to win the game.
• You click on one of the squares cards which then will turn around and reveal the face of a singer. Now you have to click on another card, which will turn around and reveal either the same or another singer.
• After each guess, the grid will keep the two pictures revealed, if you found a match. If your two chosen cards don't match they will flip back around after a short time.
• There is a match count, which tells you how many matches you found so far.
• If you made 12 matches you won the game.

## User stories

• I want to play a game that helps me to train my concentration and memory. I am into pop culture, so i'm even more excited about the game.
• I would like a nice but not distracting styling of the game so i can focus on training my memory.
• Before starting to play the game, I want to see a nice and theme matched welcome screen.
• A match count would give me a nice visual overview of how far i am in the game.
• A congratulation after i finished the game would be a nice end of the game.
• There should be different order of the cards each time i restart the game to keep it exciting.

## Technologies used

In the development of this game, I used HTML, CSS and JavaScript. I used each of these technologies twice - one set of HTML, CSS and JavaScript for the welcome screen and the second set for the game screen.

## Getting started

https://domdownunder.github.io/Memory-Game/
To start this game, you simply have to click the link which will take you to the welcome screen. Once your browser opened this screen, you just need to click the start button and the game can start.

## Next Steps

The main focus for future enhancments would be to add more levels to the game. This way the player has a more diverse experience. These levels would include different categories like Movies (with a movie reel back face), TV Series (with a tv back face) and Bands (with an instrument back face). To give the levels an increasing difficulty, the amount of cards would increase level by level. The Female Singers category that is available in the game right now would probably be level 2 since it already has 12 matching pairs. The first level would have 6 matching pairs and the third 24. Once these Levels are added, the subheading would change to "Pop Culture Edition" to include all the different level's images.
Another future enhancement would be connecting the match counts throughout the levels. Every level would have their own match count but after every level there would be a total match count on each levels congratulate screen.
There could be a loss logic, where the player will only get a certain amount of tries before the level ends. Another way to include a loss logic would be a set timer in each level - if the time runs out before all matches were found, the game ends.
Once this loss logic is added to the game's code, there would also be a highscore board on the welcome screen. Everytime there is a new highscore by the end of the game, the player would be asked to write his name down, so they could appear on the highscore board.
Including a matching sound or song to each categories congratulations screen would be another great addition.
