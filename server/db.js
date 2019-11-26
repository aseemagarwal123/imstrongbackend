// db.js

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb+srv://aseem:aseem123@wtf-m8db4.mongodb.net/test?retryWrites=true&w=majority')

client.connect(function(err) {
console.log("Connected successfully to db");


});
module.exports={
client
}
