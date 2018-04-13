//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    
    console.log('Connected to mongoDB server');
    const db = client.db('ToDoApp')

//    db.collection('Todos').find({
//        _id: new ObjectID('5aceae37de6b16764194cdf4')
//    }).toArray().then((docs) => {
//     console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('There was an error fetching data', err);
//    })

   db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
}, (err) => {
    console.log('There was an error fetching data', err);
})

db.collection('Users').find({name: 'Joseph Francis'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('There was an error fetching the document');
    
})

    //client.close();
});






