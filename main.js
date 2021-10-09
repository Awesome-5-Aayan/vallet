canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverWidth = 100; 
nasa_img_Array = ["parkingLot.jpg"];
 random_number = Math.floor(Math.random()*2);
roverHeight = 90;
RoverX = 10; 
RoverY = 10;
backgroundImage = nasa_img_Array[random_number];
RoverImage = "car2.png";
function add(){
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;
    RoverImageTag = new Image(); 
    RoverImageTag.onload = uploadRover;
    RoverImageTag.src = RoverImage;

}
function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height );
}

function uploadRover() {
    ctx.drawImage(RoverImageTag, RoverX, RoverY, roverWidth, roverHeight );
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38") {
        up();
        console.log("up");
    }
    if (keypressed == "40") {
        down();
        console.log("down");
    }
    if (keypressed == "37") {
        left();
        console.log("left");
    }
    if (keypressed == "39") {
        right();
        console.log("right");
    }
}

function up(){
    if (RoverY >= 0 ) {
       RoverY -= 10;
       console.log("when up arrow is pressed X is equal to"+RoverX+"|Y = "+ RoverY); 
       uploadBackground();
       uploadRover();
    }

}

function down(){
    if (RoverY <= 500 ) {
       RoverY += 10;
       console.log("when down arrow is pressed X is equal to"+RoverX+"|Y = "+ RoverY); 
       uploadBackground();
       uploadRover();
    }

}

function left(){
    if (RoverX >= 0 ) {
       RoverX -= 10;
       console.log("when Left arrow is pressed X is equal to"+RoverX+"|Y = "+ RoverY); 
       uploadBackground();
       uploadRover();
    }

}

function right(){
    if (RoverX <= 700 ) {
       RoverX += 10;
       console.log("when right arrow is pressed X is equal to"+RoverX+"|Y = "+ RoverY); 
       uploadBackground();
       uploadRover();
    }

}