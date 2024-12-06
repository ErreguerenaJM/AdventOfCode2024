const { parseInputLines } = require('../helperFunctions.cjs');

function mainFunction(pathname) {
    
    let array = parseInputLines(pathname), order= [], printing = [], count = 0;

    array.forEach(element => {
    
        if (element.search(/\|/)>=0)
        {
            order.push(element.split(/\|/));
        } 
        if (element.search(/\,/)>=0)
        {
            printing.push(element.split(/\,/));
        }
    });

    for (let index = 0; index < printing.length; index++) {
       let tempArray = [...printing[index]];
       if (checkRules(tempArray, order) == 1) {

            count += (1*printing[index][Math.floor(printing[index].length / 2)]);
            
        }
        
    }
   
   
   
 return count;
}

function mainFunctionB(pathname) {
    let array = parseInputLines(pathname), order= [], printing = [], count = 0;

    array.forEach(element => {
    
        if (element.search(/\|/)>=0)
        {
            order.push(element.split(/\|/));
        } 
        if (element.search(/\,/)>=0)
        {
            printing.push(element.split(/\,/));
        }
    });

    for (let index = 0; index < printing.length; index++) {
       let tempArray = [...printing[index]];
       if (checkRules(tempArray, order) != 1) {
            tempArray = correctOrder(tempArray,order);
              
            count += (1*tempArray[Math.floor(tempArray.length / 2)]);
            
        }
    
 }
 return count;
}

function checkRules (printing, rulesArray)
{
    let flag = 1;
   let i=0,j=0;
    while (i < rulesArray.length) {
        for (let index = 0; index < rulesArray.length; index++) {
            
            if (rulesArray[index].indexOf(printing[i])>=0) // si printing fue encontrado en la regla 
            {
                if (printing.indexOf(rulesArray[index][0]) >= 0 && printing.indexOf(rulesArray[index][1]) >= 0 )
                {
                    if (printing.indexOf(rulesArray[index][0]) > printing.indexOf(rulesArray[index][1])) {
                        flag = 0;
                    }
                }
            }
        }
        i++;
    }
  
    return flag;
}
function correctOrder (printing, rulesArray)
{
    let flag = 1;
   let i=0,j=0, shortRulesArray = [];
    while (i < rulesArray.length) {
        for (let index = 0; index < rulesArray.length; index++) {
            
            if (rulesArray[index].indexOf(printing[i])>=0) // si printing fue encontrado en la regla 
            {
                if (printing.indexOf(rulesArray[index][0]) >= 0 && printing.indexOf(rulesArray[index][1]) >= 0 )
                {
                  if (shortRulesArray.indexOf(rulesArray[index])==-1) {
                    shortRulesArray.push(rulesArray[index]);
                  }  
                } else
                {
                    
                }
            }
        }
        i++;
    }
    for (let index = 0; index < shortRulesArray.length; index++) {
        let a = printing.indexOf(shortRulesArray[index][0]);
        let b =  printing.indexOf(shortRulesArray[index][1]);
        if (a >= b)
        {
          
            let placeholder = printing[a];
            printing[a] = printing[b];
            printing[b] = placeholder;
            index = -1

        }
    
}
return printing;
}

// encuentro todas las reglas que son pertinentes 
// después filtro, asegurandome que todas las reglas tengan 2 de los numeros.
// loop por las reglas. Me fijo que el número en [0] esté antes que el número en [1];
// si cualquiera de las reglas da falso, hago flag = 0 y termino el loop.
// envio flag

// si flag es 0 saco el array de la lista

console.log(mainFunctionB("input.txt"));



