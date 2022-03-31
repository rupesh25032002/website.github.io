let allbtn = document.querySelectorAll(".btn");
let input = document.getElementById("inp");
let inputvalue="";
allbtn.forEach((value)=>{
  value.addEventListener("click",(e)=>{
    let btnvalue = e.target.innerText;
    if (btnvalue == "x"){
      btnvalue="*";
      inputvalue += btnvalue;
      input.value=inputvalue;
    }
    else if(btnvalue == "C"){
      inputvalue="";
      input.value=inputvalue;
    }
    else if (btnvalue == "="){
      input.value=eval(inputvalue);
      inputvalue=input.value;
    }
    else{
      inputvalue+=btnvalue;
      input.value=inputvalue;
    }
  })
})