import Footer from './footer'
import Navbar from './navbar'

export default function Layout({children}){
    return (
        <>
              
            <Navbar />
            <div className='container-md'>{children}</div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <Footer/>
        </>
    )
}