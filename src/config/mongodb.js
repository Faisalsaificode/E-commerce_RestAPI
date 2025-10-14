import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/ecomdb";

let client;

const connectToMongoDB = () =>{
    MongoClient.connect(url)
    .then(clientInstance=>{
        client=clientInstance;
        console.log("Mongodb is Connected")
    })
    .catch(err=>{
        console.log(err)
    })
}

export const getDB = ()=>{
    return client.db()
}

export default connectToMongoDB;
