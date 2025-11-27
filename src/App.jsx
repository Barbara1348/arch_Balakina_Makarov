import './App.css'
import Footer from './Pages/Components/Footer/Footer'
import Header from './Pages/Components/Header/Header'
import MainSection from './Pages/Components/MainSection/MainSection'
import style from "./App.module.css"

function App() {
  
  return (
    <>
    <html className={style.class}>
    <Header/>
     <MainSection/>
     <Footer/>
    </html>
     
    </>
  )
}

export default App
