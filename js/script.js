/* cambia fondo */
let fondoSusto = false;

setInterval(function() {
  document.body.style.backgroundImage = "url('img/fondo-sangre.jpg')";
  document.body.style.backgroundSize = "cover";

  setTimeout(function() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#4F0F00";
  }, 300);

}, 3000);



/* sonido para asustar */
window.addEventListener('click', function() {
  document.getElementById('susto').play();
}, {once: true});

document.querySelectorAll('a').forEach(function(enlace) {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('susto').play();
    setTimeout(function() {
      window.location.href = enlace.href;
    }, 500);
  });
});