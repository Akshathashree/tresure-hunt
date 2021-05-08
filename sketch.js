var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  const firebaseConfig = {
    apiKey: "AIzaSyAsgdk6Wd16n7fRst0GSplyWvcWc4XhT6Y",
    authDomain: "treasure-hunt-bd8df.firebaseapp.com",
    databaseURL: "https://treasure-hunt-bd8df-default-rtdb.firebaseio.com",
    projectId: "treasure-hunt-bd8df",
    storageBucket: "treasure-hunt-bd8df.appspot.com",
    messagingSenderId: "1084149459844",
    appId: "1:1084149459844:web:15fa787951031c73fc4bd1"
  };
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}