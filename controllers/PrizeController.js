
const {client}=require('../server/db')


async function fetchprizes(req,res,next){
if(!req.query.surname){
var laureates=await client.db('test').collection('laureates').find({"firstname":{ $regex: new RegExp("^" + req.query.firstname.toLowerCase(), "i") }}).toArray()
var prizes =await client.db('test').collection('prizes').find( { "laureates.firstname": { $regex: new RegExp("^" + req.query.firstname.toLowerCase(), "i") } }).toArray()
}
else{
var prizes =await client.db('test').collection('prizes').find( { "laureates.firstname": { $regex: new RegExp("^" + req.query.firstname.toLowerCase(), "i") },"laureates.surname": { $regex: new RegExp("^" + req.query.surname.toLowerCase(), "i") } }).toArray()
var laureates=await client.db('test').collection('laureates').find({"firstname":{ $regex: new RegExp("^" + req.query.firstname.toLowerCase(), "i") },"surname":{ $regex: new RegExp("^" + req.query.surname.toLowerCase(), "i") }}).toArray()
}
res.send({laureates,prizes})

}

module.exports = {
    fetchprizes

};
