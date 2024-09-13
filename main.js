function compararNumeros(num1, num2, num3) {
    return new Promise((resolve, reject) => {
	if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    	    reject('Uno o más valores no son números válidos.');
    	    return;
	}

	const resultados = {
    	    menor: obtenerMenor(num1, num2, num3),
    	    iguales: verificarIguales(num1, num2, num3)
	};

	resolve(resultados);
    });
}

function obtenerMenor(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

function verificarIguales(num1, num2, num3) {
    return num1 === num2 && num2 === num3;
}

function procesarDatos() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    compararNumeros(num1, num2, num3)
	.then(resultados => {
    	    let mensaje = `El número menor es: ${resultados.menor}.<br>`;
    	    mensaje += resultados.iguales ? 'Todos los números son iguales.' : 'Los números no son iguales.';
    	    document.getElementById('resultado').innerHTML = mensaje;
	})
	.catch(error => {
    	    document.getElementById('resultado').innerHTML = `Error: ${error}`;
	});
}
