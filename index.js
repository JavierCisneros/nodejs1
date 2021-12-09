/*const os = require ('os');

console.log(os.platform());
console.log(os.release());
console.log(os.userInfo());
console.log('free mem: ', os.freemem(), 'bytes');
console.log('Total mem: ', os.totalmem(), 'bytes');*/

//const fs = require('fs');
//Codigo asincrono, (No bloqueante)
/*fs.writeFile('./texto.txt', 'linea uno', function (err){
if(err){
    console.log(err);
}
console.log('Archivo creado');
});

console.log('Ultima linea de codigo');*/
/*
fs.readFile('./texto.txt',function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());

});*/

const http = require('http');

//Crear un servidor
/*http.createServer(function (req, res){ //request (peticion del host) response (respuesta del servidor)
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1> Que es esto</h1>');
    res.write('<h1>Hola Mundo desde NodeJS</h1>');
    res.end();
}).listen(3000);*/

//Manejo de servidores por medio de funciones y constantes 
/*const handleserver = function (req, res){ //request (peticion del host) response (respuesta del servidor)
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hola mundo en 3000</h1>');
    res.end();
}

const server = http.createServer(handleserver);

server.listen(3000, function(){
    console.log('Server on port 3000');
});
*/



