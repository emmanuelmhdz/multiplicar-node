
const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let { base, limite } = argv;
let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(base, limite).then(() => console.log('finalizo')).catch((error) => console.log(error));
    break;
    case 'crear':
        crearArchivo(base, limite).
            then((archivo) => {
                console.log(`Archivo creado:`, colors.green(archivo));
            }).
            catch((error) => {
                console.error(error);
            });
    break;
    default:
        console.log('Comando no reconocido');
}
