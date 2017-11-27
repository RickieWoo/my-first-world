const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');
const app = express();
const db = mongojs('sourceList', ['sourceList']);
const db_backup = mongojs('sourceBackup', ['sourceBackup']);
const marked = require('marked');
ejs = require('ejs');
// view engine setup
//app.set('view engine', 'ejs');
//html 模板

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) //将表单数据格式化
app.set('views', __dirname, './public');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.get('/editor', function(req, res) {
    res.render('./public/editor');
});
app.get('/content/:id', function(req, res) {
    res.render('./public/content');
    console.log(req.params);
    let id = req.params.id;
    // console.log(title + '--------ed--------------');
    db.sourceList.findOne({ id: id }, function(err, docs) {
        res.json(docs);
    });
});

app.get('/sourceList', function(req, res) {
    console.log('I get a req' + JSON.stringify(req.body, null, 2));
    // find everything
    db.sourceList.find(function(err, docs) {
        // docs is an array of all the documents in mycollection
        console.log(docs);
        res.json(docs);
    });
});
//post data
app.post('/sourceList', function(req, res) {
    console.log(req.body + ' eeeeeeeeeeeeeeee');
    let id = new Date().getTime().toString();
    let time = new Date().toLocaleString();
    req.body.id = id;
    req.body.time = time;
    req.body.content = marked(req.body.content)
    console.log(req.body.content)
    db.sourceList.insert(req.body, function(err, docs) {
        res.json(docs);

    });

});
//delete data 
app.delete('/sourceList/:id', function(req, res) {
    let id = req.params.id;
    console.log(id + ' app.delete');
    db.sourceList.remove({ id: id }, function(err, docs) {
        res.json(docs);
    });
});
//edit data
app.get('/sourceList/:id', function(req, res) {
    console.log(req.params);
    let id = req.params.id;
    // console.log(title + '--------ed--------------');
    db.sourceList.findOne({ id: id }, function(err, docs) {
        res.json(docs);
    });
});
//update data
app.put('/sourceList/:id', function(req, res) {
    let id = req.params.id;
    let new_id = new Date().getTime().toString();
    let time = new Date().toLocaleString();
    req.body.content = marked(req.body.content)
    console.log('_____________________---' + req.body.title + id);
    db.sourceList.findAndModify({
        query: { id: id },
        update: {
            $set: {
                title: req.body.title,
                content: req.body.content,
                sourceId: new_id,
                sourceId: time
            }
        },
        new: true
    }, function(err, doc) {
        res.json(doc);
    });

});
app.listen(3004);
console.log('app runs at port:3003 :)');