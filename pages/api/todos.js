import connectToDatabase from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === "POST") {
    //add todo
    const doc = {
      todo: req.body.todo,
      status: false,
      fav: false,
    };
    await db
      .collection("todo")
      .findOneAndUpdate(
        { user: req.body.user },
        { $push: { data: doc } },
        { upsert: true }
      );
    res.send("added");
  } else if (req.method === "DELETE") {
    //delete todo
    const data = JSON.parse(req.body);
    await db
      .collection("todo")
      .updateOne(
        { user: data.user },
        { $pull: { data: { todo: data.todo } } },
        function (err, db) {
          if (err) throw err;
        }
      );
    res.send("deleted");
  } else if(req.method==="GET") {
    //get global todo
    const todo = await db
      .collection("todo")
      .find({ user: "global" })
      .limit(20)
      .toArray(); //get todos upto 20

    res.json(todo);
  }
}
