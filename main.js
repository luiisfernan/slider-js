contador = 0;



function crack() {
  contador = contador + 1;
  if (contador === 1) {
    document.getElementById('img3').style.opacity = 0;
    document.getElementById('previous').style.color = '#fff';
  } else if (contador === 2) {
    document.getElementById('img2').style.opacity = 0;
    document.getElementById('cambiar').style.color = '#ccc';
  } else {
    document.getElementById('cambiar').disabled = true;
    contador = 2;
    
  }
}


function antes() {
    

    if(contador === 1) {
        document.getElementById('img3').style.opacity = 1;
        contador = contador - 1;
        document.getElementById('previous').style.color = '#ccc';
    } else if (contador === 2) {
        document.getElementById('img2').style.opacity = 1;
        contador = contador - 1;
        document.getElementById('cambiar').style.color = '#fff';
        
    } else if (contador === 0) {
        document.getElementById('previous').style.color = '#ccc';
        
        contador = 0;
    }
}