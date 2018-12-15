var express = require('express');
var todoController = require('./controller/todoController');

var app = express();
//set View
app.set('view engine', 'ejs');


//static files
app.use(express.static('./public'));

//controllers
todoController(app);
//listen 30000
app.listen(3000, function () {
    console.log("server running on port 3000");
});
