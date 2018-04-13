//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    
    console.log('Connected to mongoDB server');
    const db = client.db('ToDoApp')

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5aceae37de6b16764194cdf4')}, {
    //     $set: {
    //         text: 'Updated text'
    //     }
    // }, {
    //     returnOriginal: false 
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5ad0103a56ecddfb29d14fc8')}, {
        $set: {
            name: 'Joseph Francis'
        }, $inc: {
            age: -20
        }
    }).then((result) => {
        console.log(result);
    }, {
        returnOriginal: false
    });


    //client.close();
});






