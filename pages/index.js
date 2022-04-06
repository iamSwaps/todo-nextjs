import styles from "../styles/Home.module.css";
import Todo from "../components/todo";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
let prod = "https://todo-nextjs.iamswaps.vercel.app/";
let local ="http://localhost:3000/"
export async function getServerSideProps() {
  const res = await fetch(`${prod}api/todos`);
  const data = await res.json();

  return { props: { data } };
}



export default function Home({ data }) {
  const [d, setd]=useState(data)

  async function refresh(){
    const res = await fetch(`${prod}api/todos`);
    const response = await res.json();
    setd(response)
  }

  

  return (
    <div>
      <div className="d-flex flex-row-reverse">
        <div className="p-2">
          <button className="btn btn-secondary" onClick={refresh}>Refresh</button>
        </div>
      </div>
      <div className="container">
      <ul className="list-group rounded-0 bg-transparent">
        {d.map((o) => (
          <Todo key={o.todo} props={o} func={refresh}/>
        ))}
      </ul>
      </div>
    </div>
  );
}
