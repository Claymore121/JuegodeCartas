var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["zombie.jpg", "creeper.png"],
  ["arana.png", "aldeano.jpg"],
  ["enderman.png", "esqueleto.jpg", "puerco.jpg", "slime.jpg"],
  ["steve.jpj", "vaca.png", "alex.jpg", "diamante.png"],
  ["diamante.png", "esmeralda.png", "vacared.jpg", "caebzarandom.png"]
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 5
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 12
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 16
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 30
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 75
  }
];
