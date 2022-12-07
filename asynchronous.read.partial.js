const { convertCsv } = require('./csv.parse');
const { open, read} = require('fs');

open("./data/pulitzer-circulation-data.csv", (err, fd) => {
    //create anew buffer and allocate it to be 200bytes long
    const buffer = Buffer.alloc(200);

    //read to the buffer read((file descriptor)fd, buffer where the data is read to, where to start storing data in the buffer, amount of bytes to read, where to start reading, callback function )
    read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
        //count = Amt of data that was read
        //buff = Data that was read
        console.table(convertCsv(buff.toString()));
    });
})
