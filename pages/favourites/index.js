import { useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Accessdenied from "../../components/accesdenied";
import Todo from "../../components/todo";

  const domain ="http://localhost:3000/"
export async function getServerSideProps(context){

  const sess = await getSession(context)
  var data=[]
  var u=""
  if(sess){
    u=sess.user.email
  }else{
    u="global"
    return{
      props:{data}
    }
  }
  await fetch(`${domain}api/yourtodo`, {
    method: "POST",
    body: JSON.stringify({ user: u }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res)=>res.json())
  .then((d)=>data=d[0].data);
  return {
    props:{data}
  }
}

export default function Favourites({data}) {
  const [d, setd] = useState(data);
  const { data: session, status } = useSession();
  const u = session ? session.user.email : "global";

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <Accessdenied />
      </>
    );
  }

  async function refresh(){
    await fetch(`${domain}api/yourtodo`, {
      method: "POST",
      body: JSON.stringify({ user: u }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res)=>res.json())
    .then((d)=>setd(d[0].data));
    console.log("refreshed")
    return 1
  }

  return (
    <div>
      <div className="d-flex flex-row-reverse">
        <div className="p-2">
          <button className="btn btn-secondary" onClick={refresh}>Refresh</button>
        </div>
      </div>
      <div className="container">
        <div>{(d.length<=0) ? "No Todos" :""}</div>
        <ul className="list-group rounded-0 bg-transparent">
        {d.map((o) => (
          <Todo key={o.todo} props={o} user={u}  func={refresh}/>
        ))}
        </ul>
      </div>
    </div>
  );
}
