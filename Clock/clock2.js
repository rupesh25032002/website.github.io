var a = document.getElementById("stopclock");
var sectext =document.getElementById("sec1");
 var mintext =document.getElementById("min1");
 var hourtext =document.getElementById("hour1");
var s = 00;
var m = 00;
var h = 00;
var timer = true;
var tm;
//stopwatch --> Start button code
function start() {
  timer = true;
  clearInterval(tm);
  if (timer == true) {
    tm = setInterval(() => {
      if (s == 0 || s < 60) {
        s = s + 1;
      }
      if (s == 60) {
        m = m + 1;
        s = 0;
      }
      if (m == 60) {
        h = h + 1;
        m = 0;
        s = 0;
      }
      if (s <= 9) {
        sec = "0" + s;
      }
      else {
        sec = s;
      }
      if (m <= 9) {
        min = "0" + m;
      }
      else {
        min = m;
      }
      if (h <= 9) {
        hr = "0" + h;
      }
      else {
        hr = h;
      }
       hourtext.textContent=hr;
       mintext.textContent=min;
       sectext.textContent=sec;
      //a.textContent = hr + " : " + min + " : " + sec;
    }, 1000);
  }
}

//stopwatch--> stop button code
function stop() {
  st = clearInterval(tm)
}

//stopwatch--> reset button code 
function reset() {
  s = 0;
  m = 0;
  h = 0;
  sectext.textContent="0"+s;
  mintext.textContent="0"+m;
  hourtext.textContent="0"+h;
  st = clearInterval(tm)
  timer = false;
}

document.getElementById("btn1").addEventListener("click", start);
document.getElementById("btn2").addEventListener("click", stop);
document.getElementById("btn3").addEventListener("click", reset);