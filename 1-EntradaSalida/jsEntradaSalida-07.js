/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
//asigno la variable
	let numeroUno;
	let numeroDos;
	let suma;

//a la variable le doy un valor en texto y lo paso a numero
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

//hago la dicha operacion
	suma = numeroUno + numeroDos;

//hago el alert con un mensaje + suma
	alert("el resultado la suma es " + suma)
}

function restar()
{
//asigno la variable
	let numeroUno;
	let numeroDos;
	let resta;

//a la variable le doy un valor en texto y lo paso a numero
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

//hago la dicha operacion
	resta = numeroUno - numeroDos;

//hago el alert con un mensaje + resta
	alert("el resultado de la resta es " + resta);
}

function multiplicar()
{ 
//asigno la variable
	let numeroUno;
	let numeroDos;
	let multiplicar;

//a la variable le doy un valor en texto y lo paso a numero
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

//hago la dicha operacion
	multiplicar = numeroUno * numeroDos;

//hago el alert con un mensaje + multiplicacion
	alert("el resultado de la multiplicacion es " + multiplicar);
}

function dividir()
{
//asigno la variable
	let numeroUno;
	let numeroDos;
	let dividir;

//a la variable le doy un valor en texto y lo paso a numero
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

//hago la dicha operacion
	dividir = numeroUno / numeroDos;

//hago el alert con un mensaje + multiplicacion
	alert("el resultado de la division es " + dividir);
}

