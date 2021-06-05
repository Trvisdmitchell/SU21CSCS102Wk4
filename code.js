//Start Button
function Start() {
    console.log("Start Button Pushed");//displays start button push in console log
    document.getElementById("startButton").disabled = true;//disables start buttion when start button is pushed
    document.getElementById("stopButton").disabled = false;//enable stop  buttion when start button is pushed
}

function Stop() {
    console.log("Stop Button Pushed");//displays stop button push in console log
    document.getElementById("stopButton").disabled = true;//disables stop  buttion when stop button is pushed
    document.getElementById("startButton").disabled = false;//enable start buttion when stop button is pushed
}

function playstation() {//playstaion function
    console.log("playstation() Started");//displays message in console log that playstaion has started
    mysound = new sound("us-lab-background.mp3");//mp3 file used 
    mysound.play();
}
//code to play sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auido")
    this.sound.setAttribute("controls", "none")
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function () {
        this.sound.play();
    }

    this.stop = function () {
        this.sound.pause();
    }

}


//requested by Fleet Admiral, “Warning Less than ½ way to launch, time left = Time ” will be displayed at 5 second mark.
function SuperBACountdownTimer() {
    var count = 10;

    for (var i = 0; i < 11; i++) {// <10 tells it where to start and ++ is saying it will be in increments to the value.
        if (i == 10) {
            setTimeout(function () {
                document.getElementById("CountdownTimer").innerHTML = "Blastoff!!!";//IF i = 10 it will display blastoff
            }, i * 1000);//one second between each count

        }
        else if (i > 4) {//any condition less than 5
            setTimeout(function () {
                document.getElementById("CountdownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;//if i is less than 5 it will display message.
                count--;//-- subtract one from the count
            }, i * 1000);//one second between each count

        }
        else {
            setTimeout(function () {
                document.getElementById("CountdownTimer").innerHTML = count; //if the count does not have any conditions the count will be noraml.
                count--;//-- subtract one from the count
            }, i * 1000);//one second between each count 

        }


    }

    // setTimeout(function () {
    //     document.getElementById("CountdownTimer").innerHTML = "Blastoff!!!";//At end of count it will display Blastoff!
    // }, 10000);//at 10 seconds it will display blastoff
}


//--------------------------------------Countdown time with loop----------------------------------------------------
//written by: Travis Mitchell Date 05/26/2021 tramitc1@uat.edu
//Better countdown timer with (for) loop
function BACountdownTimer() {
    var count = 10;

    for (var i = 0; i < 10; i++) {// <10 tells it where to start and ++ is saying it will be in increments to the value.
        setTimeout(function () {
            document.getElementById("CountdownTimer").innerHTML = count; //tells the .html file what the code is 
            count--;
        }, 1000 * i);// multiply "i" by 1 second
    }

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = "Blastoff!!!";//At end of count it will display Blastoff!
    }, 10000);//at 10 seconds it will display blastoff
}


//--------------------------------------------Old timer---------------------------------------------------------------
//written by: Travis Mitchell Date 05/13/2021 tramitc1@uat.edu
//This is the week one assignment two countdown time sould run 10...1 then Blastoff!!. 
function startCountdown() {
    var count = 10;

    document.getElementById("CountdownTimer").innerHTML = count; //Going to change the Countdown feild to 10 when start butten is pressed.
    count = count - 1;//Will set the count -1

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1 
    }, 1000);//runs count ater 1 second

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 2000);//rounds count after 2 seconds 

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 3000);//runs count after 3 seconds

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 4000); //rouns count after 4 seconds

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 5000); // runs count after 5 seconds 

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1. 
    }, 6000);// runs count after six seconds

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1  
    }, 7000); // runs count after seven seconds 

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1 
    }, 8000);//runs count after eight seconds

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 9000);//runs count after nine seconds

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = "Blastoff!!!!!";//displays blastoff in timer stop    
    }, 10000);// displays Blastoff after ten seconds
}

//function to play space craps
function PlayCraps() {

    console.log("PlayCraps has Started");//shows in the console log that craps is playing when button is pushed.
    var Die1;
    Die1 = Math.ceil(Math.random() * 6); //Gives Readome number from one to six when "play Space Craps button? is pushed in die one spot. Ceil rounds the number up.

    document.getElementById("Die1Results").innerHTML = "The Value of First Dice is: " + Die1;// Tells the Html. what to put in Die1Ruselts.
    var Die2;
    Die2 = Math.ceil(Math.random() * 6); //Gives Readome number from one to six when "play Space Craps" button is pushed in die Two spot. Ceil rounds the number up.

    document.getElementById("Die2Results").innerHTML = "The Value of the Second Dice is: " + Die2;//tells the Html what to put in Die2Ruslts.
    var dieSum = Die1 + Die2;//Adds Die one and Die two.
    document.getElementById("SumResults").innerHTML = "The Sum of Both Die is: " + dieSum; //Gives the sum of both Die when "play Space Craps" button is pushed in Sum spot.

    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("CrapsResults").innerHTML = "Craps! You lose!! ";//If the sum is 7 or 11 it will tell the player they lose.
    } else if (Die1 == Die2 && Die1 % 2 == 0) {
        document.getElementById("CrapsResults").innerHTML = "Doubles!! You win!!!!"//If the player rolls the same number it will tell the player they win.
    }
    else {
        document.getElementById("CrapsResults").innerHTML = "Try Your luck again ";//If the player rolls any combo of number besides a 7/11/or even doubles it will ask them to try again.
    }

}

//Test of the wile loop
function SandboxTest() {
    console.log("Sandbox test Started")
    var i = 0;
    while (i < 10) {
        setTimeout(function () {
            document.getElementById("SandRes").innerHTML = i;
            i++;
        }, 1000 * i)
    }
}