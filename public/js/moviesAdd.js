window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'red'
    })

    titulo.addEventListener('mouseout', () => {
        titulo.style.color = 'black'
    })

    let estadoSecreto = 0;

    let title = document.querySelector('#titulo');

    title.addEventListener('keypress', (event) => {
        console.log(event.key)
        if (estadoSecreto == 0 && event.key == 's') 
        {estadoSecreto = 1;} 
        else if (estadoSecreto == 1 && event.key == 'e') { estadoSecreto = 2;}
        else if (estadoSecreto ==2 && event.key == 'c'){ estadoSecreto = 3 }
        else if (estadoSecreto == 3 && event.key == 'r') { estadoSecreto = 4 }
        else if (estadoSecreto == 4 && event.key == 'e') {
            estadoSecreto = 5
        } else if (estadoSecreto == 5 && event.key == 't') {
            estadoSecreto = 6
        }else if (estadoSecreto ==6 && event.key == 'o'){ 
            estadoSecreto = 0; 
            alert("SECRETO MAGICO" )
        }else{
            estadoSecreto = 0;
        }
        console.log(estadoSecreto)
    })


    

}

 

