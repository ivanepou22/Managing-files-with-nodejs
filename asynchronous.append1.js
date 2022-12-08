const { appendFile } = require('fs');

//Appends the file entries
appendFile('./app.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /Ivan-write-2.com" 405 21512',
(err) => err ? console.log(err): console.log('File saved !')
)