let pikachu = {
  vida: 150,
  ataque: 30
};

let rattata = {
  vida: 120,
  ataque: 20
};

var turno = 1;

if (turno == 1 ) {
  let accion = document.getElementById('botonp').addEventListener('click', evento);
  function evento (evento) {
    rattata.vida = rattata.vida - pikachu.ataque;
    console.log(rattata.vida);
    var turno = 2;
  }
  if (turno == 2) {
   let ac = document.getElementById('botonr').addEventListener('click', eve);
   function eve (eve) {
     pikachu.vida = pikachu.vida - rattata.ataque;
     console.log(pikachu.vida);
     var turno = 1;
  }
  }
}
