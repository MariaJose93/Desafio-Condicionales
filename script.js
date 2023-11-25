function Pedido() {
    foto1 = parseInt(document.getElementById('foto1').value);
    foto2 = parseInt(document.getElementById('foto2').value);
    foto3 = parseInt(document.getElementById('foto3').value);

    sumaTotal = foto1 + foto2 + foto3;

    if (sumaTotal <= 10) {
        let resultado = document.querySelector('.respuesta');
        resultado.innerHTML = 'Lleva un total de ' + sumaTotal + ' stickers.';
    
    } else {
        let resultado = document.querySelector('.respuesta');
        resultado.innerHTML = "Llevas demaciados stickers";
        
    }
};

imagen=document.querySelector('#imagen');
imagen.addEventListener('click', function(){
    this.classList.toggle('activo');
});

function verificar(){
    n1=document.getElementById("password1").value;
    n2=document.getElementById("password2").value;
    n3=document.getElementById("password3").value;

    if (n1 === "9" && n2 === "1" && n3 === "1") {
        let respuesta = document.querySelector('.resultado')
        respuesta.innerHTML = "Password 1 correcto";
        
    } else if (n1 === "7" && n2 === "1" && n3 === "4") {
        let respuesta = document.querySelector('.resultado');
        respuesta.innerHTML = "Password 2 correcto"; 
        
    } else {
        let respuesta = document.querySelector('.resultado');
        respuesta.innerHTML = "Password incorrecto";
        
    }
};


