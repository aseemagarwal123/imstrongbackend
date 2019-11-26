// db.js

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.DATABASE_URL)

client.connect(function(err) {
console.log("Connected successfully to db");


});
module.exports={
client
}
