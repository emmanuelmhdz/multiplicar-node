const opciones = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    alias: "l",
    demand: true,
    default: 10
  }
};
const argv = require("yargs")
  .command(
    "listar",
    "Permite listar la tabla de multiplicar en consola",
    opciones
  )
  .command(
    "crear",
    "Permite crear un archivo con la tabla de multiplicar",
    opciones
  )
  .help().argv;

module.exports = {
  argv
};
