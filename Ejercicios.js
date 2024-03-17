/*
EJERCICIO #1:
    Convierta la siguiente función en una función asíncrona 
    para retornar la data usando async/await
*/
async function getData(url) {
    try {
        const respuesta = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/*
EJERCICIO #2:
    Dado un array de números, utilice el método map para obtener un nuevo array
    donde cada elemento sea el cuadrado del elemento original. Luego, utiliza el
    método filter para obtener otro array que solo contenga los números pares del
    array original.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map(num => num * num);
const evenNumbers = squaredNumbers.filter(num => num % 2 === 0);

console.log("Números originales:", numbers);
console.log("Números al cuadrado:", squaredNumbers);
console.log("Números pares al cuadrado:", evenNumbers);

/*
EJERCICIO #3:
    Crear una función que devuelva el promedio de un arreglo, en caso de que el
    arreglo esté vacío debe devolver cero.
*/

function calcularPromedio(arreglo) {
    if (arreglo.length == 0) {
      return 0;
    }
    const suma = arreglo.reduce((total, elemento) => total + elemento, 0);
    const promedio = suma / arreglo.length;
    return promedio;
}


/*
EJERCICIO #4:
    Cree una función que reciba 3 argumentos numéricos y retorne el numero más
    alto.
*/

function numeroMasAlto(a, b, c) {
    return Math.max(a, b, c);
}

/*
EJERCICIO #5:
    Crear una función que reciba un arreglo como parámetro y devuelva una copia del
    arreglo (este debe ser una copia integra y no solo una referencia al arreglo
    original).
*/
function copiarArreglo(arreglo) {
    return [...arreglo];
}
  