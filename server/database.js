import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.URI;
const db = process.env.DB;
const colP = process.env.PRODUCTS;
const colU = process.env.USERS;
let client;

//console.log(uri, db, colP, colU);

async function connectDB() {
  try {
    client = new MongoClient(uri);
    await client.connect();
    //console.log(client.s);
    return client;
  } catch (error) {
    console.log(error);
  }
}

async function closeDB() {
  try {
    await client.close();
    console.log(client.s.hasBeenClosed);
    return client;
  } catch (error) {
    console.log(error);
  }
}

async function catalogo() {
  try {
    connectDB();
    const database = client.db(db);
    const collection = database.collection(colP);

    const cursor = await collection.find();
    const products = [];

    for await (const doc of cursor) {
      products.push(doc);
    }
    console.log(products);
    return products;
  } catch (error) {
    console.log(error);
  }
}

async function findProduct(id) {
  try {
    connectDB();
    const database = client.db(db);
    const collection = database.collection(colP);

    const query = { _id: id };

    const prod = await collection.findOne(query);
    //console.log(prod);
    return prod;
  } catch (error) {
    console.log(error);
  }
}

async function login(user, pw) {
  try {
    connectDB();
    const database = client.db(db);
    const collection = database.collection(colU);

    const query = { username: user, password: pw };

    const result = await collection.findOne(query);
    if (result) {
      return result;
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function update(updatedDoc) {
  try {
    const database = client.db(db);
    const collection = database.collection(colP);

    const filter = { _id: updatedDoc._id };
    const updateDoc = {
      $set: updatedDoc,
    };

    const result = await collection.updateOne(filter, updateDoc);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

export { client, connectDB, closeDB, catalogo, findProduct, login, update };
