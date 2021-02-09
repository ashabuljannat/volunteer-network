const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectId;


const MongoClient = require('mongodb').MongoClient;


const app = express()
app.use(cors())
app.use(bodyParser.json())




const uri = "mongodb+srv://volunteer:volunteer0193@cluster0.vgs8p.mongodb.net/volunteer?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const eventCollection = client.db("volunteer").collection("volunteer-event");
 console.log('database success');
 
 app.post('/addOwnEvent',(req, res) => {
  const newEvent = req.body;
  eventCollection.insertOne(newEvent)
  .then(result => (console.log(result)))
})

 app.get('/events',(req, res) => {
  eventCollection.find({})
  .toArray((err, documents) => {
    res.send(documents)
  })
})
app.delete('/cancelEvent/:id', (req, res) => {
  eventCollection.deleteOne({_id: ObjectId(req.params.id)})
  .then(result =>{
       console.log(result);
      
  })
})


   
});



 
app.get('/', (req, res) => {
  res.send('Hello World') 
})

app.listen(5000)









