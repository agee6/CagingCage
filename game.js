(function () {

  var Game = function () {
    this.currentSize = 100;
    this.currentTime = 2000;
    this.score = 0;
    this.gameOver = false;
    this.clickCounter = 0;
    this.badClickCounter = 0;
    this.timeCounter = 0;
    this.cageCount = 0;
    this.scoreDiv = document.getElementById("scoreDiv");
    this.playDiv = document.getElementById('main');
  };

  Game.prototype.startGame = function(){
    document.getElementById('main').addEventListener("click", this.clicked.bind(this));
    this.resetPlayDiv();
    this.showWords();


    // this.wordsIndex = setInterval(this.removeWords.bind(this), 1000);
  };


  Game.prototype.showWords = function () {

    this.removeWords();
    // this.wordsIndex = setInterval(this.startGame, 1000);
  };
  Game.prototype.iterateGame = function(){
    this.timeCounter += 1;
    if(this.badClickCounter > 3){
      this.gameOver = true;
    }
    if (this.timeCounter > 100){
      this.gameOver = true;
    }
    if(this.cageIndex !== undefined){
      clearInterval(this.cageIndex);

    }
    if(this.gameOver){
      this.showFinalBoard(false);
    }else if(this.currentSize < 40){
      this.showFinalBoard(true);
    } else {
      this.currentTime = this.currentTime - 10;
      this.cageIndex = setInterval(this.addCage.bind(this, this.currentSize),
              this.currentTime);
    }

  };
  Game.prototype.addCage = function(size){

    var br = size/2;
    this.cageDiv = document.createElement("div");
    this.cageDiv.style.backgroundColor = "blue";
    this.cageDiv.id = "cage";
    this.cageDiv.style.position = "absolute";
    this.cageDiv.style.backgroundImage = 'url(nicolas-cage.jpg)';
    this.cageDiv.style.height=size + "px";
    this.cageDiv.style.width = this.cageDiv.style.height;
    this.cageDiv.style.backgroundSize = "cover";
    this.cageDiv.style.borderRadius = br + "px";
    var leftVal = Math.random() * 90;
    var topVal = Math.random() * 85;
    this.cageDiv.style.left= leftVal + "%";
    this.cageDiv.style.top=  topVal + "%";
    this.cageDiv.addEventListener('click', this.cageClick.bind(this));
    this.resetPlayDiv();

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("main");
    var otherDiv = document.getElementById('ForCage');
    currentDiv.insertBefore(this.cageDiv, otherDiv);
    this.rCageIndex = setInterval(this.removeCage.bind(this),
                        this.currentTime/2);
  };

  Game.prototype.removeCage = function(){
    this.cageDiv.remove();
    clearInterval(this.rCageIndex);
  };
  Game.prototype.resetPlayDiv = function(){

    this.playDiv.style.backgroundImage = 'url(NationalTreasureFilmSet.jpg)';
    this.playDiv.innerHTML = "";
  };

  Game.prototype.clicked = function(event){
      this.badClickCounter += 1;
      this.clickCounter += 1;
      this.currentTime = this.currentTime - 50;
      this.currentSize = this.currentSize - 5;
      this.score -=5;
      this.updateScore();
  };
  Game.prototype.cageClick = function(event){

    this.badClickCounter -=1;
    this.score += 25;
    this.cageCount += 1;
    this.playDiv.style.backgroundImage = 'url(caged.jpg)';
    // this.playDiv.style.zIndex = "1";
    this.playDiv.innerHTML = "Caged!";

    this.updateScore();

  };
  Game.prototype.updateScore = function(){
    this.scoreDiv.innerHTML = this.score;

  };
  Game.prototype.removeWords = function(){
    var elem = document.getElementById("startButton");
    if (elem !== null){
      elem.remove();

    }

    //clearInterval(this.wordsIndex);
    this.iterateGame();
    this.startIndex = setInterval(this.iterateGame.bind(this), 2000);
  };
  Game.prototype.showFinalBoard = function(won){
    this.playDiv.removeEventListener('click', this.clicked.bind(this));
    clearInterval(this.startIndex);


      this.playDiv.style.backgroundImage = 'none';
      this.playDiv.style.backgroundColor = "white";
      this.playDiv.style.backgroundImage = 'url(NicCage.jpg)';
      this.playDiv.innerHTML = "GAME OVER";
      var newP = document.createElement('p');
      newP.id = "endData";
      newP.innerHTML = "\n \t  Your Final Score Is: " + this.score;
      var elem = document.getElementById('finalData');

      var newP2 = document.createElement('p');
      newP2.id = "endData";
      newP2.innerHTML = "\t Your Cage count is: " + this.cageCount ;
      // var elem = document.getElementById('finalData');


      this.playDiv.insertBefore(newP, elem);
      this.playDiv.insertBefore(newP2, elem);


      var newButton = document.createElement("button");
      //var newContent = document.createTextNode("Hi there and greetings!");

      //var newContent = document.createTextNode("Hi there and greetings!");
      newButton.id="restartButton";
      newButton.innerHTML="Start New Game!";
      newButton.addEventListener('click', kick);
      var newP3 = document.createElement('p');
      newP3.id = "pun";
      newP3.innerHTML = "Enjoy some Cajun!";


      // add the newly created element and its content into the DOM
      var currentDiv = document.getElementById("main");
      // document.body.insertBefore(newButton, currentDiv);
      this.playDiv.insertBefore(newButton, elem);
      this.playDiv.insertBefore(newP3, elem);

  };
  var kick = function(){
    var game = new Game();
    game.startGame();
  };
  var newDiv = document.createElement("button");
  //var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.id="startButton";
  newDiv.innerHTML="Start Game!";
  newDiv.addEventListener('click', kick);


  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("main");
  document.body.insertBefore(newDiv, currentDiv);


})();
