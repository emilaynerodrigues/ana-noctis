const frases=[

"Ana, você tem sido meu segundo girassol.",

"Todos os nossos momentos, mesmo os mais breves, me fazem sentir paz.",

"Todos os dias, assim como o girassol procura a luz...",

"... meus pensamentos sempre encontram você.",

"Fico pensando se você me daria o prazer de estar ao seu lado...",


"... todos os dias de hoje em diante.",

"Porque mesmo na escuridão, você tem sido minha luz.",

"Posso ser a sua?"

];

const texto=document.getElementById("texto");

let frase=0;

let letra=0;

function escrever(){

if(letra<frases[frase].length){

texto.innerHTML+=frases[frase][letra];

letra++;

setTimeout(escrever,70);

}

else{

setTimeout(()=>{

texto.innerHTML="";

frase=(frase+1)%frases.length;

letra=0;

escrever();

},3000);

}

}

escrever();
