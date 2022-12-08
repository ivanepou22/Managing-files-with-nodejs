const fs = require('fs');

module.exports.read = () => {
    //determine the size of the file
    let totalSize = 0;
    fs.stat('./data/app.log', (err, { size }) => totalSize = size);

    fs.open(
        './data/app.log', (err, fd) => {
            const buffer = Buffer.alloc(200);

            //read the file
            for (let i = 0; i <= totalSize / buffer.length; i++) {
                fs.read(fd, buffer, 0, buffer.length, i * buffer.length, (err, count, buff) => {
                    console.log(buff.toString());
                })
            }
        })
}
