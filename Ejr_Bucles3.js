console.log("|-------------------------Cuenta regresiba---------------------------|") 

let Rose1=10; 
let Rose2=10;

//  CON FOR 
for ( let Rose = 10; Rose>=0 ; Rose--){ 

  console.log("Faltan "+Rose+" segundos para el despegue"); 
    
    if (Rose == 0){ 

       console.log("DESPEGUE DEL COHETE")
    };
};   

//CON WHILE 
while(true){ 

    Rose1-=1; 

    console.log("Faltan "+Rose1+" segundos para el despegue") 

    if (Rose1 == 0){ 

        console.log("DESPEGUE DEL COHETE")
        break

    }; 

};  

//CON DO WHILE 

do{  

   Rose2-=1; 

    console.log("Faltan "+Rose2+" segundos para el despegue") 

    if (Rose2 == 0){ 

       console.log("DESPEGUE DEL COHETE")
        break

    }; 

}while(true);




