var data = [{ item: 'React' }, { item: 'Node JS' }, { item: 'postgreSQL' }];

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

  app.get('/todo', function (req, res) {
    res.render('todo', { todos: data });
  });

  app.post('/todo', urlencodedParser, function (req, res) {
    data.push(req.body);
    console.log(data);
    res.json(data);
  });

  app.delete('/todo/:item', function (req, res) {
    data = data.filter(function (todo) {
      return todo.item !== req.params.item;
    });
    res.json(data);
  });
}
