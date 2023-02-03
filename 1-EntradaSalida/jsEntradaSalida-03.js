/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/


function mostrar()
{
	//Declaro la variable nombreIngresado
	let nombreIngresado;

	//obtengo el dato por ID del elemento
	nombreIngresado = txtIdNombre.value;
	/*tambien se puede usar nombreIngresado = document.getElementById("txtIdNombre").value; (hace lo mismo) */

	//muestro por alert
	alert(nombreIngresado);

}


