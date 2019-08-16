// const fs = require('fs');
const express = require('express');
const router = express.Router();
const jsonParser = express.json();

let cars = ['jjj',1];


/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    if(!req.body) return res.sendStatus(400);
    res.json(req.body); // отправляем пришедший ответ обратно
});

module.exports = router;



// fs.appendFile("index.txt", req.body.login+' : '+req.body.pwd+'\n', function(error){
//     if(error) throw error; // если возникла ошибка
//     console.log("Complete!");
// console.log(data);  // выводим считанные данные
// });
// res.redirect('/');
