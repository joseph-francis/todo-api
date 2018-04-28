const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');
const bodyParser = require('body-parser');
const express = require('express');

var app = express()

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body.text);

    const newTodo = new Todo({text: req.body.text})
    newTodo.save().then((doc) => {
        res.send(doc)
    }, (err) => {
        console.log(err);
        res.status(400).send(e);
    })

})

module.exports = {
    app 
}

app.listen(3000, () => {
    console.log('App is up and running in port 3000');
})



























//NOTES 

// const aUser = new User({
//     email: 'josephfrancis100@gmail.com' 
// })

// aUser.save().then((doc) => {
//     console.log(doc)
// }, (err) => {
//     console.log(err)
// })

// const newTodo = new Todo({text: 'Cook dinner'}); 

// newTodo.save().then((doc) => {
//     console.log(doc);
// }, (err) => {
//     console.log(`There was an error saving data: ${err}`)
// })

// const anotherToDo = new Todo({
//     text: 'Coding is awesome!!', 
//     completedAt: 1230
// })

// anotherToDo.save().then((doc) => {
//     console.log(doc);
// }, (err) => {
//     console.log(err)
// })
