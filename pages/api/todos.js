

import connectToDatabase from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === "POST") {
    //add todo
    const doc = {
      todo: req.body,
      status: false,
      fav: false,
    };

    await db.collection("todo").insertOne(doc, function (err, db) {
      if (err) throw err;
    });
    res.send("added");
  } else if (req.method === "DELETE") { //delete todo
    const doc = {
      todo: req.body,
    };
    await db.collection("todo").deleteOne(doc, function (err, db) {
      if (err) throw err;
    });
    res.send("deleted")
  } else { //get all todo
    const todo = await db.collection("todo").find({}).limit(20).toArray(); //get todos upto 20

    res.json(todo);
  }
}
