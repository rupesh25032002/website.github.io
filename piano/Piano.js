// setting backgroundcolor and sound for white buttons
var allwhitebutton = [[w1,whitesound1],[w2,whitesound2],[w3,whitesound3],[w4,whitesound4],[w5,whitesound5],[w6,whitesound6],[w7,whitesound7],[w8,whitesound8],[w9,whitesound9],[w10,whitesound10]];
allwhitebutton.forEach(value => {
  value[0].addEventListener("mousedown",()=>{value[0].style.backgroundColor="#B0C4DE";
  value[1].currentTime=0;
  value[1].play();
  });
  value[0].addEventListener("mouseup",()=>{setTimeout(()=>{value[0].style.backgroundColor='snow'},500);});
});

//setting audio and background foe black buttons
var allblackbutton = [[b1,blacksound1],[b2,blacksound2],[b3,blacksound3],[b4,blacksound4],[b5,blacksound5],[b6,blacksound6],[b7,blacksound7]];
allblackbutton.forEach((value)=>{
value[0].addEventListener("mousedown",()=>{value[0].style.background="#B0C4DE";
value[1].currentTime=0;
value[1].play();
});
value[0].addEventListener("mouseup",()=>{setTimeout(()=>{value[0].style.backgroundColor="grey"},500);});
});

