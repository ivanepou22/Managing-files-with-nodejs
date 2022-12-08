const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./data/app.log', {
        encoding: 'utf-8'
    }
);

const writer = createWriteStream('./data/output1.log');

stream.pipe(writer);