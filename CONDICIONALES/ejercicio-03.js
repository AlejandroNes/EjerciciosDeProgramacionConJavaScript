/* Pedir dos números y decir si uno es múltiplo del otro número */

const num1 = Number( prompt("ingrese un número") );
const num2 = Number( prompt("ingrese otro número") );

if( num1 % num2 == 0 ){
    console.log("Son multiplos")
}else{
    console.log('No son multiplos')
}

