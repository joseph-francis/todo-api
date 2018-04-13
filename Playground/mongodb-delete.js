//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    
    console.log('Connected to mongoDB server');
    const db = client.db('ToDoApp')

    //Delete many 
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //Deleting one --> Deletes the first one it sees
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    //FindAndDeleteOne 
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').findOneAndDelete({name: 'Joseph Francis'}).then((result) => {
    //     console.log(result, 'Deleted')
    // })

    db.collection('Users').deleteMany({name: 'Joseph Francis'}).then((result) => {
        console.log(result);
    })


    //client.close();
});






