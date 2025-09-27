import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import SchoolLife from './pages/SchoolLife'
import Students from './pages/Students'
import Calendario from './pages/Calendario'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
          <ScrollToTop />
          <Routes> 
            <Route path='/'           element={<Layout><Home/></Layout>}/>
            <Route path='/about'      element={<Layout><About/></Layout>}/>
            <Route path='/admissions' element={<Layout><Admissions/></Layout>}/>
            <Route path='/contact'    element={<Layout><Contact/></Layout>}/>
            <Route path='/schoollife' element={<Layout><SchoolLife/></Layout>}/>
            <Route path='/students'   element={<Layout><Students/></Layout>}/>
            <Route path='/calendario' element={<Layout><Calendario/></Layout>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
