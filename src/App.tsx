import Layout from   './components/layout/layout'
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import SchoolLife from './pages/SchoolLife'
import Students from './pages/Students'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes> 
            <Route path='/'           element={<Layout><Home/></Layout>}/>
            <Route path='/about'      element={<Layout><About/></Layout>}/>
            <Route path='/admissions' element={<Layout><Admissions/></Layout>}/>
            <Route path='/contact'    element={<Layout><Contact/></Layout>}/>
            <Route path='/schoollife' element={<Layout><SchoolLife/></Layout>}/>
            <Route path='/students'   element={<Layout><Students/></Layout>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
