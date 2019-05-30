const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    
    return new Promise((resolve, reject) =>{
        
        if(!Number(base))
            reject(`${base} no es un numero`)
        
        let contenido = '';

        for(let indice = 1; indice <= limite; indice++){    
            contenido +=  `${base} * ${indice} = ${base * indice}\n`;
        }
    
    
        const data = new Uint8Array(Buffer.from(contenido));
        let archivo = `tablas/tabla-${base}.txt`; 
        
        fs.writeFile(archivo, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(archivo);
        });

    });
    
}

let listarTabla = async (base, limite = 10) => {
    console.log("======================".green);
    console.log(`Tabla de multiplicar ${base}`.green);
    console.log("======================".green);
    for(let indice = 1; indice <= limite; indice++){    
       console.log(`${base} * ${indice} = ${base * indice}`);  
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}