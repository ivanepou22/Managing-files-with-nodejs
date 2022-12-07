const { convertCsv } = require('./csv.parse');
const { open, read} = require('fs');

open("./data/pulitzer-circulation-data.csv", (err, fd) => {
    //create anew buffer and allocate it to be 200bytes long
    const buffer = Buffer.alloc(200);

    //read to the buffer
    read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
        console.table(convertCsv(buff.toString()));
    });
})
