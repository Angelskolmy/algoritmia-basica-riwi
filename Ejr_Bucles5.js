import readline from"node:readline/promises"; 
import { stdin as input, stdout as output } from "node:process";


let PrinspInicio = readline.createInterface({input, output}); 
let MedInicio= (await PrinspInicio.question("Desea iniciar operacion SI - NO ")).trim().toUpperCase();  


while(MedInicio !== "SI" && MedInicio !== "NO" ){ 

    console.log("opcion ingresada "+ MedInicio +" invalida"); 

    MedInicio= (await PrinspInicio.question("Desea iniciar operacion SI - NO  ")).trim().toUpperCase();  
}; 

while(MedInicio == "SI"){  

    let sumaNotes=0;
    let Compiler=[]; 


    let MedCantNots= parseInt(await PrinspInicio.question("Cantidad de notas "), 10); 

    while (Number.isNaN(MedCantNots) || MedCantNots < 1) { 

        console.log("numero invalido") 

        MedCantNots = parseInt(await PrinspInicio.question("Cantidad de notas "), 10); 

    }; 


    for(let BucladoLander= 0; BucladoLander < MedCantNots; BucladoLander++ ){   

        let Mednotas = Number(await PrinspInicio.question("Ingrese nota " + (BucladoLander + 1) + ": "));

        while(Number.isNaN(Mednotas) || Mednotas < 0){
        
            console.log("opcion invalida "+Mednotas) 
            Mednotas = Number(await PrinspInicio.question("Ingrese nota " + (BucladoLander + 1) + ": "));
        };
        
        Compiler.push(Mednotas);

    }; 

    for(let calculador of Compiler){ 

        sumaNotes += calculador 
    }; 

    let resultado= sumaNotes/Compiler.length; 


    for(let imprimirdor in Compiler){ 

        console.log("Nota " + (Number(imprimirdor) + 1) + ": " + Compiler[imprimirdor]);

    };  

    if (resultado < 5){ 

        console.log("El promedio es de " + resultado + " desaprobado"); 

    } 
    else{

        console.log("El promedio es de " + resultado + " aprobado"); 
    }; 


    MedInicio= (await PrinspInicio.question("Desea iniciar operacion SI - NO")).trim().toUpperCase();  
    
    while(MedInicio !== "SI" && MedInicio !== "NO" ){ 

        console.log("opcion ingresada "+ MedInicio +" invalida"); 

        MedInicio= (await PrinspInicio.question("Desea iniciar operacion SI - NO")).trim().toUpperCase();  
         
    }; 

};  

console.log("salio del programa")
PrinspInicio.close();
