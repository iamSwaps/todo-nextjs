import styles from "../styles/Home.module.css";
import Link from "next/link";
import Todo from "../components/todo";
import "bootstrap/dist/css/bootstrap.css";
let local = process.env.LOCALHOST;

export async function getServerSideProps() {
  const res = await fetch(`${local}api/todos`);
  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div>
      <div className="d-flex flex-row-reverse">
        <div className="p-2">
          <Link href="/">
            <button className="btn btn-secondary">Refresh</button>
          </Link>
        </div>
      </div>
      <div className="container">
      <ul className="list-group rounded-0 bg-transparent">
        {data.map((d) => (
          <Todo key={d.todo} props={d} />
        ))}
      </ul>
      </div>
    </div>
  );
}
