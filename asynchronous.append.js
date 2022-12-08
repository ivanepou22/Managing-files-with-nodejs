const { writeFile } = require('fs');

//Appends the file entries
writeFile('./app.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /Ivan-write-1.com" 405 21512',
{flag: 'a'},
(err) => err ? console.log(err): console.log('File saved !')
)