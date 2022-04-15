import connectToDatabase from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === "POST") {
    //get user todo
    const todo = await db
      .collection("todo")
      .find({ user: req.body.user })
      .limit(20)
      .toArray();
    if(todo.length>0){
      res.json(todo);
    }else{
      const doc={
          "user": req.body.user,
          "data": []
      }
      await db
      .collection("todo")
      .insertOne(
        doc,
        function(err, res){
          if (err) throw err;
          console.log("new user added")
        }
      );
      const todo = await db
      .collection("todo")
      .find({ user: req.body.user })
      .limit(20)
      .toArray();
      res.json(todo)
    }
  }
}
