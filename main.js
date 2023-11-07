// Seleccionamos todos los botones (+-*/)
const botones = document.querySelectorAll("button");

// Escuchamos el click de cada botón y guardamos el dato ingresado de los inputs
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const valor1 = Number(document.getElementById("contenedor1").value);
    const valor2 = Number(document.getElementById("contenedor2").value);
    // Se guarda la operación seleccionada (+-*/) en la variable operacion
    const operacion = boton.getAttribute("operacion");
    // Si valor uno o valor 2 son números válidos
    if (!isNaN(valor1) && !isNaN(valor2)) {
        let resultado;
        if (operacion === "+") {
            resultado = valor1 + valor2;
        } else if (operacion === "-") {
            resultado = valor1 - valor2;
        } else if (operacion === "*") {
            resultado = valor1 * valor2;
        } else if (operacion === "/") {
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                alert("No se puede dividir por cero.");
                return;
            }
        } else {
            alert("Operación no válida");
            return;
        }
    
        document.getElementById("contenedor-resultado").value = resultado;
    } else {
        alert("Por favor ingrese números válidos en ambos campos.");
    }
  });
});

// Funcion que se ejecuta cuando se presiona una tecla y previene que se inserte en 
// caso que no sea un numero
const inputChange = (event) => {
    console.log('La tecla presionada es: ' + event);

    // Si la tecla no es un numero y no es la tecla de borrar y no es una flechita, no insertar
    if (isNaN(Number(event.key)) && event.key !== 'Backspace' && !event.key.includes('Arrow')) {
        console.log('Tecla invalida');
        event.preventDefault();
    }
}

document.getElementById("contenedor1").addEventListener('keydown', inputChange)