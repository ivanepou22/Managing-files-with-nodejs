const { convertCsv } = require('./csv.parse');
const { readFile } = require('fs');

module.exports.read = () => {
    //call backs
    readFile("./data/pulitzer-circulation-data.csv", "utf-8",
        (err, data) => {
            if (err) {
                console.log(`There was a problem with the file: ${err}`);
                return;
            }
            const values = convertCsv(data);
            console.table(values)
        }
    );
}