import { useSession } from "next-auth/react"
import styles from "../styles/components/login.module.css";
export default function login(){
    const { data: session, status } = useSession()
    if(!session){
        return(<div className={styles.login}>You are not logged in</div>)
    }else{
        return(<div className={styles.login}>You are logged as {session.user.email}</div>)
    }
}

