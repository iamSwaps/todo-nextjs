import styles from "../styles/Home.module.css";
import Todo from "../components/todo";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useSession, getSession } from "next-auth/react";

const domain= process.env.PRODUCTION ? process.env.PRODHOST : process.env.LOCALHOST

export async function getServerSideProps() {
  const res = await fetch(`${process.env.PRODUCTION}api/todos`);
  const d = await res.json();
  const data= d[0].data
  return { props: { data } };
}



export default function Home({ data }) {
  const [d, setd]=useState(data)
  const { data: session, sessionstatus } = useSession();

  const u= "global"

  async function refresh(){
    const res = await fetch(`${domain}api/todos`);
    const r=await res.json()
    const data=r[0].data 
    setd(data)
    return 1
  }
  
  if (sessionstatus === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="d-flex flex-row-reverse">
        
        <div className="p-2">
          <button className="btn btn-secondary" onClick={refresh}>Refresh</button>
        </div>
      </div>
      <div className="container">
      <small className="text-muted" style={{textAlign:"center"}}>This is Global todo list</small>
      <ul className="list-group rounded-0 bg-transparent">
      {d.map((o) => (
          <Todo key={o.todo} props={o} user={u}  func={refresh}/>
        ))}
      </ul>
      </div>
    </div>
  );
}
