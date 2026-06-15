import './App.css'
import Navbar from './COMPONENTS/NAV/Navbar'
import Home from './COMPONENTS/HOME/home'
import About from './COMPONENTS/ABOUT/about'
import Card from './COMPONENTS/CARD/card'
import Contact from './COMPONENTS/CONTACT/contact'
function App() {

  return (
    <>
    <Navbar/>    
    <Home/>
    <About/>
    {/* <Card/> */}
    <Contact/>
    </>
  )
}

export default App