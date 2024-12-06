const { parseInputLines } = require('../helperFunctions.cjs');

function mainFunction(pathname) {
// cargar archivo
const array = parseInputLines(pathname);
console.log("ARRAY: ",array);
let result = 0;

array.forEach(element => {
    result += isItSafe(element.split(" "));
});

// 
return result;
}

function mainFunctionB(pathname) {
    const array = parseInputLines(pathname);
console.log("ARRAY: ",array);
let result = 0;

array.forEach(element => {
    result +=    isItSafeWithDampener(element.split(" "), true);
     
});

// 
return result;
}
console.log("RESULTADO :",mainFunctionB("Input.txt"));

//console.log(mainFunction("input2.txt"));

function isItSafe(array)
{
    console.log("ARRAY RECIBIDO: ", array);
    let safe = 1, index = 0, direction = '', prevDirection = '';
   
    while (safe == 1 && index < array.length-1) {
       let gradual = array[index+1] - array[index];
        if ((Math.abs(gradual) > 0) && (Math.abs(gradual) < 4) ) //verifico que esté entre los valores aceptados, entre 1 y 3
        {
            if (gradual > 0)        //asigno la dirección
            {
                direction = "up";
            } else
            {
                direction = "down";
            }
            if (index != 0) // en todos los casos que no sean el primero, me fijo que la dirección vaya para el mismo lado
            {
                if (direction != prevDirection)
                {
                    safe = 0;
                }
            }
            prevDirection = direction;  // paso la dirección actual como la previa
            } else {
            safe = 0;
        }
       index++;  
    }

    return safe;
}
function isItSafeWithDampener(array, recursion)
{
    let index = 0, direction = '', prevDirection = '',safetyArray =[];
   
    while (index < array.length-1) {
        let safe = 1;
       let gradual = array[index+1] - array[index];
        if ((Math.abs(gradual) > 0) && (Math.abs(gradual) < 4) ) //verifico que esté entre los valores aceptados, entre 1 y 3
        {
            if (gradual > 0)        //asigno la dirección
            {
                direction = "up";
            } else
            {
                direction = "down";
            }
            if (index != 0) // en todos los casos que no sean el primero, me fijo que la dirección vaya para el mismo lado
            {
                if (direction != prevDirection)
                {
                    safe = 0;
                }
            }
            prevDirection = direction;  // paso la dirección actual como la previa
            } else {
            safe = 0;
        }

        safetyArray.push(safe);
        
        
       index++;  
    }
    console.log("SAFETY ARRAY: ", safetyArray);
    
        if (contarOcurrencias(0, safetyArray)>0)
        {
            
            let indexErrores = [];
            for (let indexA = 0; indexA < safetyArray.length; indexA++) {   
                if (safetyArray[indexA]==0) {
                    //console.log("cargar a array");
                    
                    indexErrores.push(indexA);
                }
            }
//            console.log("INDEX ERRORES: ",indexErrores);
                let safety2ndLevel = 0, indexB = 0;
            while (indexB < array.length && safety2ndLevel==0) {
  //              console.log("RECURSIÓN");
                
                let placeholderArray = [...array];
                console.log("array: ",array);
                
               
                placeholderArray.splice(indexB, 1);
                
                console.log("placeholder: ",placeholderArray);
              
                if (isItSafe(placeholderArray) == 1)
                {
                    console.log("balance alcanzado");
                    safety2ndLevel = 1;
                }

                indexB++;
            }
            if (safety2ndLevel == 1)
            {
                return 1;
            } else {
                return 0;
            }
            

            
               
                
            }
            //console.log("INDEX ERRORES",indexErrores);
         else
        { 
            return 1;
        }
}
function contarOcurrencias (numero, array)      //debería hacerla una funcion general ya que la uso en el día 1 también.
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