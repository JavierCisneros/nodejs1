const Math = {}; //Creacion de un objeto 

//Funciones 
function add(x1,x2){
    return x1 + x2;
}
function substract(x1,x2){
    return x1 - x2;
}
function multiply(x1,x2){
    return x1 * x2
}
function divide(x1,x2){
    if(x2 == 0 ){
        console.log('No puedes dividir por 0 ');
    }else{
    return x1 / x2;
    }
}
//Se le agregan las propiedades al objeto Math
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide; 

//Se exporta el objeto Math
//module.exports = Math; //Objeto Math


//Se pueden exportar funciones, objeto y datos
function hello(name){
   return console.log('Hola', name);
     
}
//Se exporta la funcion hello
module.exports = hello; 

//Exportacion de propiedades de objetos
/*exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;*/
