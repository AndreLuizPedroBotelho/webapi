const mongoClient = require("mongodb").MongoClient;

mongoClient.connect('mongodb://localhost/workshop', { useNewUrlParser:true }).then(conn =>
    global.conn = conn.db("workshop")).catch(err=>
        console.log(err)
)

function findCustomers(callback){
    global.conn.collection('customers').find().toArray(callback);
}

const ObjectId = require("mongodb").ObjectId;
function findCustomer(id,callback){
    global.conn.collection('customers').findOne(new ObjectId(id),callback);
}

function insertCustomer(customer,callback){
    global.conn.collection('customers').insert(customer,callback);
}

function deleteCustomer(id,callback){
    global.conn.collection('customers').deleteOne({_id:new ObjectId(id)},callback);
}

function updateCustomer(id,customer,callback){
    global.conn.collection('customers').update({_id:new ObjectId(id)},customer,callback);
}

function patchCustomer(id,updates,callback){
    global.conn.collection('customers').update({_id:new ObjectId(id)},{$set:updates},callback);
}

module.exports = {findCustomers,findCustomer,insertCustomer,deleteCustomer,updateCustomer,patchCustomer}
