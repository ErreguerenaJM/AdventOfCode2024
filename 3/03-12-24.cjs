const { parseInputLines } = require('../helperFunctions.cjs');

function mainFunction(pathname) {
    let input = parseInputLines(pathname);
    let array = [], count = 0;
    const regexp = /mul\(\d{1,3},\d{1,3}\)/gm, regexp2 = /\d{1,3}/gm;
    input.forEach(element => {
        let subArray = [...element.match(regexp)];
        array.push(...subArray);
    });
    array.forEach(element => {
        let subArray = [...element.match(regexp2)];
        count += (subArray[0] * subArray [1]);
    });
    return count;
}
function mainFunctionB(pathname) {
    let input = parseInputLines(pathname);
    let array = [], count = 0;
    const regexp = /do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\)/g, regexp2 = /\d{1,3}/gm;
    input.forEach(element => {
        let subArray = [...element.match(regexp)];
        array.push(...subArray);
    });
    let flag = 1;
   for (let index = 0; index < array.length; index++) {
    if (array[index].match(/mul\(\d{1,3},\d{1,3}\)/g))
    {
        if (flag == 1)
        {
            let subArray = [...array[index].match(regexp2)]
            count += (subArray[0] * subArray [1]);
        }
    }  else if (array[index].match(/do\(\)/g))
    {
        flag = 1;
    } else if (array[index].match(/don't\(\)/g))
    {
        flag = 0;
    }
    
   }
    return count;
}
//console.log(mainFunction("input.txt"));


console.log(mainFunctionB("input.txt"));
