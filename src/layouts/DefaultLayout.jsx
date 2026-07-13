import Header from "../components/Header"
import Loader from "../components/Loader"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

// import del context per il loader
import { useGlobal } from "../contexts/GlobalContext";


function DefaultLayout() {

  // prendiamo dal context il valore che ci serve
  const {isLoading} = useGlobal();

    return (
        <>
          <Header />
          <main className="container py-4 min-vh-100">
            <Outlet />
          </main>
          {isLoading && <Loader />}
          <Footer />

        </>
 
       )
      }

export default DefaultLayout
//export default App