import { MongoClient } from "mongodb";

let uri = "mongodb+srv://iamswaps:jblrVtCjrHiVQRTX@cluster0.lzwoy.mongodb.net/next-todo?retryWrites=true&w=majority";
let dbName = "next-todo";

export default async function connectToDatabase() {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  return { client, db };
}
