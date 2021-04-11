const fs=require('fs');

const vehiculos=[
    {
        id:1,
        marca:'CHEVROLET',
        modelo:'SPARK',
        placa:'PPPA2939',
        identificacion:'1717171717',
        idpropietario:1
    },
    {
       id:2, 
       marca:'KIA',
        modelo:'SPORTAGE',
        placa:'ABC1234',
        identificacion:'0922222222',
        idpropietario:3


    },
    {
        id:3, 
        marca:'KIA',
         modelo:'PICANTO',
         placa:'PCB0001',
         identificacion:'1717171717',
         idpropietario:1


 
     },
     {
        id:4, 
        marca:'MAZDA',
         modelo:'CX-3',
         placa:'PAA2223',
         identificacion:'1700000001',
         idpropietario:2

 
     },
     {
        id:4, 
        marca:'CHEVROLET',
         modelo:'AVEO',
         placa:'TAB2234',
         identificacion:'1700000001',
         idpropietario:2
 
     }
];

const propetarios=[

    {
        proid:1,
        identificacion:'1717171717',
        nombres:'Jhonatan Espinoza',
        tipolicencia:'B'
    },
    {
        proid:2,
        identificacion:'1700000001',
        nombres:'Jose Perez',
        tipolicencia:'C'
    },
    {
        proid:3,
        identificacion:'0922222222',
        nombres:'Gernando Mendez',
        tipolicencia:'B'
    },
    {
        proid:4,
        identificacion:'0123456799',
        nombres:'Maria Lopez',
        tipolicencia:'A'
    }




];

const Obtenerpropietario=(identificacion)=>{

    return new Promise((resolve,reject)=>{

        const propietario=propetarios.find(p=>p.identificacion===identificacion);

        (propietario)
        ? resolve(propietario)
        : reject(`No existe propietario con identificación ${identificacion}`)

    });
};

const Obtenervehiculo=(idpropietario)=>{

    return new Promise((resolve,reject)=>{

        const vehiculo=vehiculos.filter((v)=>v.idpropietario===idpropietario);
        (vehiculo)
        ? resolve(vehiculo)
        : reject(`No existe un vehículo con id ${id}`)


    });


};


//let propietario;



const ObtenerInfoAMT=async(id)=>{

    try {
        
        const propietario=await Obtenerpropietario(id);
        const vehiculo=await Obtenervehiculo(propietario.proid);

        
        const resultadoinformacion=[propietario,vehiculo];

        return resultadoinformacion;
        
    } catch (err) {
        
        throw err;
    }


};


const GuardarInfovehiculo=async(propietario,vehiculos,mostrar=false)=>{

    try {
        
        let ficha='';
        const{identificacion}=propietario;
        const{nombres}=propietario;
        const{tipolicencia}=propietario;

        ficha+=`================================================================\n`;
        ficha+=` Identificación: ${identificacion}                            \n`;
        ficha+=` Nombres: ${nombres}       Tipo de licencia: ${tipolicencia}  \n`;
        ficha+=`================================================================\n`;
        ficha+=`\n`;


        if(vehiculos.length>0){

            ficha+=`Vehículos asociados: ${vehiculos.length}\n`;
            ficha+=`\n`;
            for (let i = 0; i < vehiculos.length; i++) {
                ficha+=`================================================================\n`;
                ficha+=` Marca: ${vehiculos[i].marca}   Modelo: ${vehiculos[i].modelo} Placa: ${vehiculos[i].placa}\n`;
                ficha+=`================================================================\n`;
                
            }
           
        }

      if(mostrar){
          
        console.log(ficha);

      }
       fs.writeFileSync(`./fichavehiculo/ficha-${identificacion}.txt`, ficha);
       console.log(`Ficha ficha-${identificacion}.txt creada!`);


    } catch (err) {
        throw err;
    }



};


const metodos={
    GuardarInfovehiculo,
    ObtenerInfoAMT

}

module.exports=
{
    metodos
};


/* 
    Obtenerpropietario(id)
    .then(propie=>{
        propietario=propie;
        return Obtenervehiculo(id)

    })
    .then(vehiculo=>{

        console.log(propietario);
        console.log(vehiculo);
    

    })
    .catch(err=>console.log(err)) */


