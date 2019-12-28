const  {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to server');
    const db=client.db('TodoApp');
    //delete many
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });
    client.close();
});
