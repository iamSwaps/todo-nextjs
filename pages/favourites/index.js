import { useSession, getSession } from "next-auth/react"
import Accessdenied from "../../components/accesdenied"
export default function Favourites(){
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        return (<><Accessdenied/></>)
    }
    
    return (
        <div>
            favourites
        </div>
    )
}
