
const {metodos}= require('./logica/infovehiculos');
const argv=require('./config/yargs');
console.clear();


//const id='1717171717';

metodos.ObtenerInfoAMT(argv.i,argv.m)
.then(resultado=>{
   // console.log(resultado);

    metodos.GuardarInfovehiculo(resultado[0],resultado[1],argv.m);

})
.catch(err=>console.log(err));
