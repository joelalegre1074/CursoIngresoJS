/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//se declara la variable
	let nombre; 
	let edad;
	
	
	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;
	
// fijarse los espacios entre las comillas de alert para que no se junte el msj

	alert(" usted se llama " + nombre + " y tiene " + edad + " años");
}

