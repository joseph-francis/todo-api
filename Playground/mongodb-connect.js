//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')
var obj = new ObjectID()
console.log(obj); //like a new autoID 


var user = {name: 'Joseph Francis', age: 20}
var {name} = user 
console.log(name) //ES6 expression to get the name property of user object

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    
    console.log('Connected to mongoDB server');
    const db = client.db('ToDoApp')

    db.collection('Todos').insertOne({
        text: 'Some random text', 
        completed: true
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert data', err)
        }
        
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    // db.collection('Users').insertOne({
    //     //you can provide something like "_id: 123"
    //    name: 'Joseph Francis', 
    //    age: 20, 
    //    location: 'Missouri City' 
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('There was an error inserting data in Users node', err)
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimeStamp(), undefined, 2));
    // })

    client.close();
});






