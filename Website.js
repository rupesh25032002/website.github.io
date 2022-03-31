//Adding javascript to smallmenubar for animation 
let threeline=document.getElementById("threeline");
let flag=0;
threeline.addEventListener("click",()=>{
  let smallscreenmenu=document.getElementById("smallscreenmenu");
  if(flag%2==0){
    threeline.style.background="linear-gradient(to bottom right,rgb(3, 3, 14),rgb(189, 186, 40))";
    smallscreenmenu.style.display="flex";
    smallscreenmenu.style.animation="smallmenuwrap1 0.5s ease-in 1  forwards ";
    flag++;
  }
  else{
   threeline.style.background="linear-gradient(to bottom right,rgb(172, 142, 142),rgb(208, 136, 230))";
  console.log(threeline.style);
  smallscreenmenu.style.display="flex";
  smallscreenmenu.style.animation="smallmenuwrap2 1s ease-in 1  reverse forwards ";
  flag++;
}
})

//Adding projects link
//clock
let clock=document.getElementById("clock");
clock.addEventListener("click",()=>{
  timeout1=setTimeout(()=>{location.assign("Clock/Clock.html")},1000);
})

//Piano 
let Piano=document.getElementById("Piano");
Piano.addEventListener("click",()=>{
  timeout2=setTimeout(()=>{location.assign("piano/Piano.html")},1000);
})

//Stopwatch
let Stopwatch=document.getElementById("Stopwatch");
Stopwatch.addEventListener("click",()=>{
  timeout3=setTimeout(()=>{location.assign("Clock/clock2.html")},1000);
})
//Calculator
let Calculator=document.getElementById("Calculator");
Calculator.addEventListener("click",()=>{
  timeout4=setTimeout(()=>{location.assign("Calculator/Calculator.html")},1000);
})

//Ordersnack
let Ordersnack=document.getElementById("Ordersnack");
Ordersnack.addEventListener("click",()=>{
  timeout5=setTimeout(()=>{location.assign("Order/Ordersnack.html")},1000);
})
//Dictionary
let Dictionary=document.getElementById("Dictionary");
Dictionary.addEventListener("click",()=>{
  timeout6=setTimeout(()=>{location.assign("Dictionary/Dictionary.html")},1000);
})


//adding social media link 
let fb=document.getElementById("fb"); 
fb.addEventListener("click",()=>{
  location.assign("https://www.facebook.com/Rupesh-upadhyay-103928457919980");
})
let insta=document.getElementById("insta");
insta.addEventListener("click",()=>{
  location.assign("https://www.instagram.com/__rupesh_2.0__/");
})
let social3=document.getElementById("social3");//twitter
social3.addEventListener("click",()=>{
  location.assign("https://twitter.com/RupeshU90156718");
})
let social4=document.getElementById("social4");//gmail
social4.addEventListener("click",()=>{
  location.assign("mailto:rupeshupadhyay984@gmail.com");
})
