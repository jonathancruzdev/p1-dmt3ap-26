// Variable
let nombre = 'Sofia'; // text  | cadena | string
let edad = 23;        // numero | Number
let alumno = true;   // Boolean:   true (verdadero) false (falso)

nombre = prompt('Ingrese su nombre');
edad = +prompt('Ingrese la edad');

if( edad > 18) { // Si
    alert("Hola " + nombre + ' Bienvenido');
    // alert( edad + 10 );
} else { // Si no
    alert('Sos menor de edad, no podes ingresar 😒');
}

