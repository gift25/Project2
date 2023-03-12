const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

// Replace the <username>, <password>, <cluster-url>, and <database-name> placeholders with your own values
const uri = 'mongodb+srv://gift:gift250945@clusterlogin.hizeb7s.mongodb.net/project?retryWrites=true&w=majority';

app.get('/', (req, res) => {
  MongoClient.connect(uri, (err, client) => {
    const collection = client.db("project").collection("classroom");

    collection.find({}).toArray((err, data) => {
      res.render('index.ejs', { data: data });
      client.close();
    });
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
