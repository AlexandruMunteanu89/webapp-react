import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"




function DefaultLayout() {

    return (
        <>
          <Header />
          <main className="min-vh-100">
            <Outlet />
          </main>
          <Footer />


        </>
 
       )
      }

export default DefaultLayout
//export default App