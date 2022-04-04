import "bootstrap/dist/css/bootstrap.css"
import styles from '../styles/components/footer.module.css'
import Link from "next/link"

export default function Footer(){
    
    return (
        <div>
            <Link href="/addtodo/"><button className={`${styles.footbtn} btn btn-secondary`}>+</button></Link>
        </div>
    )
}