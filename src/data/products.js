// const fs = require('fs');

// if (process.argv[2] === undefined) {
//     console.error(`Usage: node products.js <file.cvs>`);
//     process.exit(1);
// }

// const file = process.argv[2];
// const fileContent = fs.readFileSync(file, 'utf8').toString();
// const lines = fileContent.split('\n');
// const header = lines[0];
// const dataLines = lines.slice(1);

// const fieldNames = header.split(',');

// let objects = [];
// for (let i = 0; i < dataLines.length; i++) {
//     let obj = {};
//     const data = dataLines[i].split(',');
//     for (let j = 0; j < fieldNames.length; j++) {
//         const fieldName = fieldNames[j].toLocaleLowerCase();
//         obj[fieldName] = data[j];
//     }
//     objects.push(obj);
// }

// const jsonText = JSON.stringify(objects);
// const outputFilename = file.replace('.csv', '.json');
// fs.writeFileSync(outputFilename, jsonText);
