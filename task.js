const MongoClient = require('mongodb').MongoClient;

//String to connect mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
      return console.log('Unable to connect to mongdb server');
  } 
  console.log('connect');
  const db=client.db('TodoApp');
  db.collection('Users').insertOne({
      name:"Boumediene",
      age:25,
      location:'Ain dzarit'
  },(err,result)=>{
      if(err){
        return console.log('unable to insert db',err);
      }
      console.log(JSON.stringify(result.ops,undefined,2));
  })
  db.collection('Todo').insertOne({
      text:'Something to do',
      completed:false
  },(err,result)=>{
      if(err){
          return console.log('unable to insert db',err);
      }
      console.log(JSON.stringify(result.ops,undefined,2));
  })
  client.close();

});



