const express = require('express');
const app = express();

// Replace the <username>, <password>, <cluster-url>, and <database-name> placeholders with your own values
const url = 'mongodb+srv://gift:gift250945@clusterlogin.hizeb7s.mongodb.net/?retryWrites=true&w=majority/explorer/OudDB/product/find';

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url);

app.get('/', function(req, res) {
  client.connect(function(err) {
    console.log("Connected successfully to server");

    const db = client.db("project");

    // Add your MongoDB query here
    db.collection('mycollection').find().toArray(function(err, data) {
      if (err) throw err;

      res.render('index', { data: data });
    });
  });
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
