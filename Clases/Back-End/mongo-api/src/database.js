import { MongoClient } from "mongodb";

export async function connect() {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser: true})
        const db = client.db('mongo-api');
        return db;
    } catch (e) {
        console.log(e);
    }
}