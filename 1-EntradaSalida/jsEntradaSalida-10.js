/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;

	importe = txtIdImporte.value;
	importe = parseFloat(importe)

	descuento = importe*25/100;

	resultado = importe - descuento; 

	txtIdResultado.value = resultado. toFixed(2);

}
