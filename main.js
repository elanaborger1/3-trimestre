

function tocaSom(idElementoaudio){
    document.querySelector(idElementoaudio).play();
    }
   
const listaDeteclas = document.querySelectorAll('.tecla');

let contador = 0;

    while(contador <listaDeteclas.length){

        listaDeteclas[contador] .onclick = fuction(){
            tocaSom('#som_tecla_splash')
        };
         contador = contador + 1;

         console.log(contador);
    }

