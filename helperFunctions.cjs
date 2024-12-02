//Helper functions
const fs = require('fs');



function parseInput(path) { //source codevogel
    // Read file contents and split into lines
    const fileContents = fs.readFileSync(path, 'utf8');
    let result = fileContents.replace(/\s\s+/g, '\n').split('\n');
   
    // Optional: Remove any empty lines if needed
    // return result.filter(line => line.trim() !== '');
    return result;
}

module.exports = {parseInput};
