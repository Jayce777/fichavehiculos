const { string } = require('yargs');

const argv=require('yargs')
.options(
    'i',{
    alias:'identificacion',
    type:'string',
    describe:'Indetificación de persona',
    demandOption:true

    })
  
    .options(
        'm',{
            alias:'mostrar',
            type:'boolean',
            demandOption:true,
            default:false,
            describe:'Mostrar información almacenada'
        })
    //chequear los valores de entrada antes de ejecutar el programa
    .check((argv,options)=>{

        return true;
    })
    
.argv;


module.exports=argv;