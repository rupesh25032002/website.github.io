document.getElementById("logobody").addEventListener("click", getresult);

function getresult() {
  const xhr = new XMLHttpRequest();
  let word = document.getElementById("searchbar").value;
  xhr.open("get", `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, true);

  xhr.onload = () => {
    let wordvalue = document.getElementById("word");
    let meaningvalue = document.getElementById("meaningvalue");
    let secondcontainer = document.getElementById('secondcontainer');
    if (xhr.status === 200) {
      console.log("hiii");
      let data = JSON.parse(xhr.response);
      let meaning = document.getElementById("meaning");
      meaning.innerText = "Meaning";
      wordvalue.innerText = word;
      let value = data[0].meanings[0].definitions[0].definition;
      meaningvalue.innerText = value;
      secondcontainer.style.backgroundColor = "green";
      secondcontainer.style.display = "flex";

      //adding audio
      let aud = document.createElement("audio");
      aud.src = data[0].phonetics[0].audio;
      aud.autoplay = "autoplays";
    }
    else {
      wordvalue.innerText = word;
      meaningvalue.innerText = `Sorry...! Dictionary Cant understand Your word "${word}"`;
      secondcontainer.style.backgroundColor = "red";
      let voicediv = document.getElementById("voicediv");
      voicediv.style.display = "none";
    }
  }
  xhr.send();
}
