/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// partseInt sirve para convertir numeros en texto a enteros
	let numerouno;

	let numerodos;
	
	let suma;

	
	numerouno = txtIdNumeroUno.value;
	numerouno = parseInt(numerouno);

	numerodos = txtIdNumeroDos.value;
	numerodos = parseInt(numerodos);

	suma = numerouno + numerodos;

	alert("la suma es " + suma)




	
}

