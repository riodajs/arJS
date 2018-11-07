const { Board, Led, Sensor } = require('johnny-five');

let myLed, myBoard, myMic;

myBoard = new Board();

myBoard.on("ready", function(){
  myMic = new Sensor("A0");
  myDMic = new Sensor({pin: 2, type: "digital"});
  myLed = new Led(13);
  myMic.on("data", (val) => {
    if(val > 545){
      myLed.on();
    }else{
      myLed.off();
    }
    console.log("Analogico: " + val);
  });
  myDMic.on("data", (valD) => {
    console.log("Digital: " + valD);
  });
  myMic.on("error", (err) =>{
    console.log(err);
  });
});

myBoard.on("error", function(err){
  console.log(err);
});

