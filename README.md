# CagingCage
Game so you can cage the Cage!

This game utilizes only Javascript, html, and css. All DOM manipulation utilizes just javascript. No jquery or other libraries were used. 


## Game Play

The game opens to the following home screen: 

![open-page]

To begin play hit the large blue "start game" button in the top right. 

The purpose of the game is to Cage Nicolas Cage. This is best done with a fast hand on the mouse, and, if desired, while eating Cajun food.

Nicolas Cage's face will appear periodically at a rondom location in the National Treasure set background. as seen in this screenshot: 

![game-play]

If you successfully click on his face then you will have caged Nicolas Cage and you will continue on your merry way trying to catch him again. However, he gets quicker and farther away the more you click, so beware!

Also for every time you succesfully click on his head your "Cage Count" will increase, and is shown in the top right with every instance of Nic Cage's head representing a successfull click. 

For every correct click you get 25 points. For every incorrect click you get -5 points. 

When completed your final score and cage count will be shown, as well as the opportunity to begin another game. The final screen looks like this: 

![final-page]

Good luck and happy Caging!

[open-page]: ./docs/screenShots/StartGame.png
[game-play]: ./docs/screenShots/GamePlay.png
[final-page]: ./docs/screenShots/EndOfGame.png

##Implementation

This game is implemented using only javascript, no Jquery, nor canvas, nor any other library were used. All DOM manipulation happen using javascript calls. 

The only languages used to build the game are javascript, HTML, and css. index.html has the initial html layout. Manipulation after that takes place when someone clicks on the Start Game button that then initializes an instance of the game class. 

All styling is done with vanilla css. 

Thanks for taking the time to play my game! 


