const http = require('http');
const fs = require('fs');
const path = require('path');
const peoples = require('./api');

let allPeoples = `${JSON.stringify(peoples, null, 2)}`;
let p1 = JSON.stringify(peoples[0]);
let p2 = JSON.stringify(peoples[1]);
let p3 = JSON.stringify(peoples[2]);
let p4 = JSON.stringify(peoples[3]);
let p5 = JSON.stringify(peoples[4]);

///////////////////////////////////////////////////////////////////////////////////////

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname,req.url);
    let filePath2 = path.join(__dirname,'peoples',req.url);
    let contentType = 'text/html';
    if (path.basename(filePath)==='peoples'){
        res.writeHead(200, {'Content-type': contentType});
        res.end(allPeoples);
    } 
    if (path.basename(filePath2,'/')) console.log('daadada') 
    // console.log(req.url, path.basename(filePath2));
        switch (path.basename(filePath2)) {
            case '1':
                res.writeHead(200, {'Content-type': contentType});
                res.end(p1);
                break;
            case '2':
                res.writeHead(200, {'Content-type': contentType});
                res.end(p2);
                break;
            case '3':
                res.writeHead(200, {'Content-type': contentType});
                res.end(p3);
                break;
            case '4':
                res.writeHead(200, {'Content-type': contentType});
                res.end(p4);
                break;
            case '5':
                res.writeHead(200, {'Content-type': contentType});
                res.end(p5);
                break;
            default:
                res.writeHead(200, {'Content-type': contentType});
                res.end("WRONG PATH!");
        }

    });

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log('Listening 8080');
});


// fs.appendFile('readme.log', people[0].name +''+'\n', function(error){
//     if(error) throw error;
// });

