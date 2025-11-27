import Nav from "./Nav/Nav"
import style from "./Header.module.css"

function Header() {
  
  return (
    <>
     <header className={style.color}>
        <Nav/>
     </header>
    </>
  )
}

export default Header
