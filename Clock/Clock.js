

function start(){ timeout=setInterval(()=>{
   d = new Date();
  hours=d.getHours();
  minutes=d.getHours();
  seconds=d.getSeconds();
  var h = document.getElementById("hour");
  h.style.transform = `rotate(${30*hours+minutes/2}deg)`;
  h.nextElementSibling.style.transform=`rotate(${6*minutes}deg)`;
  h.nextElementSibling.nextElementSibling.style.transform=`rotate(${6*seconds}deg)`;

},1000);
}

document.getElementById("btn1").addEventListener("click",start);

document.getElementById("btn2").addEventListener("click",()=>{clearInterval(timeout);})

