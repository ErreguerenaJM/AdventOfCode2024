const { parseInputLines } = require('../helperFunctions.cjs');

function mainFunction(pathname, word) {

    //cargo archivo en array/matriz
    const matrix = parseInputLines(pathname);
    let count = 0;
    //empiezo a moverme 1 por 1, buscando al letra inicial
    for (let index = 0; index < matrix.length; index++) {
        for (let index2 = 0; index2 < matrix[index].length; index2++) {
            if (matrix[index][index2]== word[0]) {
                //funcion
                    //Cuando encuentro la letra inicial (X), empiezo busqueda del resto de la palabra en todas las direcciones
            count += checkWord(index, index2, matrix, word, "up", "");
            count += checkWord(index, index2, matrix, word, "down", "");
            count += checkWord(index, index2, matrix, word, "left", "");
            count += checkWord(index, index2, matrix, word, "right", "");

            count += checkWord(index, index2, matrix, word, "up", "left");
            count += checkWord(index, index2, matrix, word, "up", "right");
            count += checkWord(index, index2, matrix, word, "down", "left");
            count += checkWord(index, index2, matrix, word, "down", "right");
            }
            
        }
    }
    return count;
    }
function mainFunctionB(pathname, letter, word) {

    //cargo archivo en array/matriz
    const matrix = parseInputLines(pathname);
    let count = 0;
    //empiezo a moverme 1 por 1, buscando al letra inicial
    for (let index = 0; index < matrix.length; index++) {
        for (let index2 = 0; index2 < matrix[index].length; index2++) {
           if (matrix[index][index2]== letter ) {
         
           if ((checkWord(index-1, index2-1, matrix, word, "down", "right") + checkWord(index+1, index2-1, matrix, word, "up", "right") + checkWord(index-1, index2+1, matrix, word, "down", "left")+checkWord(index+1, index2+1, matrix, word, "up", "left"))>1)
                    {
                        count++;
                    }
            }
        }
    }
    return count;
    
    
}
function checkWord(index, index2, matrix, word, direction, direction2 = '') {
    let i=0, j=0, wordIndex=0, flag=1;
    while (wordIndex < word.length && flag == 1) {
        if (((index+i) >= 0 && (index+i) < matrix.length )&& ((index2+j) >= 0 && (index2+j) < matrix.length ) ) {
            if (matrix[index+i][index2+j] == word[wordIndex])
                {
               
                    
                } else
                {
                    flag = 0;
                }
                wordIndex++;
                switch (direction) {
                    
                    case "left":
                        j--
                        break;
                    case "right":
                        j++
                        break;
                    default:
                        break;
                    case "up":
                        i--
                        break;
                    case "down":
                        i++
                        break;
                }
                switch (direction2) {
                    case "up":
                        i--
                        break;
                    case "down":
                        i++
                        break;
                    case "left":
                        j--
                        break;
                    case "right":
                        j++
                        break;
                    default:
                        break;
                }
        
        } else {
            flag = 0;
        }
        
    if (flag == 1)
    {

    }
}
return flag;    
    

}

//console.log (mainFunction("input.txt", "XMAS"));

console.log (mainFunctionB("input.txt", "A", "MAS"));