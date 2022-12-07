const { convertCsv } = require('./csv.parse');
const fs = require('fs');
const { promisify } = require('util');

//stop a readFile function from needing a callback
const readFile = promisify(fs.readFile);

//promises
readFile("./data/pulitzer-circulation-data.csv", "utf-8")
    .then(data => console.table(convertCsv(data)))
    .catch(err => console.log(`File Error: ${err}`));

//Async Await
const read = async () => {
    const data = await readFile("./data/pulitzer-circulation-data.csv", "utf-8");

    console.table(convertCsv(data))
}

read();