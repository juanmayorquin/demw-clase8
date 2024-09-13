const compararNumeros = (num1, num2, num3) => new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        reject('Uno o más valores no son números válidos.');
        return;
    }

    const resultados = {
        menor: obtenerMenor(num1, num2, num3),
        iguales: verificarIguales(num1, num2, num3),
        numerosIguales: encontrarNumerosIguales(num1, num2, num3)
    };

    resolve(resultados);
});

const obtenerMenor = (num1, num2, num3) => Math.min(num1, num2, num3);

const verificarIguales = (num1, num2, num3) => num1 === num2 && num2 === num3;

const encontrarNumerosIguales = (num1, num2, num3) => {
    const iguales = [];
    if (num1 === num2) iguales.push(num1);
    if (num2 === num3) iguales.push(num2);
    if (num1 === num3 && !iguales.includes(num1)) iguales.push(num1);
    return iguales;
};

const procesarDatos = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    compararNumeros(num1, num2, num3)
        .then(resultados => {
            let mensaje = `El número menor es: ${resultados.menor}.<br>`;
            if (resultados.iguales) {
                mensaje += 'Todos los números son iguales.';
            } else {
                mensaje += 'Los números no son iguales.<br>';
                if (resultados.numerosIguales.length > 0) {
                    mensaje += `Los siguientes números son iguales: ${resultados.numerosIguales.join(', ')}.`;
                } else {
                    mensaje += 'No hay números iguales.';
                }
            }
            document.getElementById('resultado').innerHTML = mensaje;
        })
        .catch(error => {
            document.getElementById('resultado').innerHTML = `Error: ${error}`;
        });
};
