var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var lists = [{
    name: 'personal', tasks: ['sleep', 'eat']
}, {
    name: 'school', tasks: ['homework', 'study for the test']
}, {
    name: 'work', tasks: ['get rich', 'get that promotion', 'slap the CEO in the face']
}];

app.get('/api/data', function(req, res) {
    res.send(lists);
});

app.post('/api/task/:index', function(req, res) {
    var listIndex = req.params.index;
    console.log(req.body);
    lists[listIndex].tasks.push(req.body.text);
    console.log(lists);
    res.send(req.body.text);
});


// app.get('/api/hello-world', function(req, res) {
//     res.send('Hello World');
// });
//
// app.post('/api/task', function(req, res) {
//     console.log(req.body);
//     res.send(req.body);
// });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});