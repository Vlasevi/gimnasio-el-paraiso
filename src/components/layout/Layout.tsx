import Footer from "./Footer"
import Header from "./Header"


function Layout({children}: { children: React.ReactNode }) {
  return (
    <>
    <Header/>
    <div className="page-enter-active">
      {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout