const  {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to server');
    const db=client.db('TodoApp');
    db.collection('Todo').find({completed: false}).toArray().then((docs)=>{
        console.log('todos');
        console.log(JSON.stringify(docs, undefined, 2));

    },(err)=>{
        console.log('Unable to fetch todos', err);
    });
    client.close();
});
