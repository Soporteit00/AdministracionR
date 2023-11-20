const audio = document.getElementById("audio");

function reproducirAudio() {
  audio.play();
}

function pausarAudio() {
  audio.pause();
}

//Funciones para avanzar 

const icon = document.getElementById("icon");
const avanzarBtn = document.getElementById("avanzarBtn");

icon.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

icon.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});

function toggleInfo() {
  var info = document.getElementById("informacion");
  if (info.style.display === "none" || info.style.display === "") {
      info.style.display = "block";
  } else {
      info.style.display = "none";
  }
}

