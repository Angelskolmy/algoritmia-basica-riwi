console.log("|------------------suma de numeros naturales------------------|") 
 
let Rukongai1=0;  
let Rukongai2=0; 
let Rukongai3=0; 
let Rukongai4=0; 
let Rukongai5=0;

// CON FOR

for (let First_Op=0 ; First_Op <=10; First_Op++ ){

    Rukongai1+= First_Op 

};   
console.log("suma de numeros naturales con for "+ Rukongai1);


// CON WHILE 

while (true){ 

    Rukongai2+=1;
    Rukongai3+=Rukongai2;  

    if(Rukongai2 >=10){ 
        break
    }

};  

console.log("suma de numeros naturales con while "+ Rukongai3); 

// CON DO WHILE 

do{ 

    Rukongai4+=1;
    Rukongai5+=Rukongai4;  

    if(Rukongai4 >=10){ 
        break
    }

} while(true); 

console.log("suma de numero naturales con do while "+Rukongai5);

