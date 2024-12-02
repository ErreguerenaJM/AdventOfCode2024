const { parseInput } = require('../helperFunctions.cjs');

function mainFunction(pathname) {

    let array = parseInput(pathname);

    let arrayUno = [], arrayDos = [];
   
    splitInTwoArray(array, arrayUno, arrayDos);
    arrayUno.sort();
    arrayDos.sort();
  
    return distanciaArrays (arrayUno, arrayDos);

}
function mainFunctionB(pathname)
{
    
    let array = parseInput(pathname);

    let arrayUno = [], arrayDos = [];
   
    splitInTwoArray(array, arrayUno, arrayDos);
    arrayUno.sort();
    arrayDos.sort();
   
    return similarityArrays (arrayUno, arrayDos);

}

// cargar los datos
// separar los datos
// ordenarlos       array.sort
// contar las diferencias


function distanciaArrays (arrayUno, arrayDos)
{
    let count = 0;
    for (let index = 0; index < arrayUno.length; index++) {
        count += distancia (arrayUno[index], arrayDos[index]);
    }
    return count;
}

function distancia (numberUno, numberDos)
{
    return Math.abs (numberUno - numberDos);
}

function similarityArrays(arrayUno, arrayDos)
{
    let count = 0;
    for (let index = 0; index < arrayUno.length; index++) {
        count += (contarOcurrencias(arrayUno[index], arrayDos)* arrayUno[index]);  

    }
    return count;
}
function contarOcurrencias (numero, array)
{
    count = 0;
    for (let index = 0; index < array.length; index++) {
        if (numero == array[index])
        {
            count += 1;
        };
        
    }
    return count;
}

function splitInTwoArray(arrayBase, arrayUno, arrayDos)
{
    for (let index = 0; index < arrayBase.length; index++) {

        if (index % 2 === 0)
        {
            arrayUno.push(arrayBase[index]);
        } else
        {
            arrayDos.push(arrayBase[index]);
        }
    }
}
console.log(mainFunction("input.txt"));

console.log(mainFunctionB("input.txt"));
