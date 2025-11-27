import Article from "./Article/Article"
import Aside from "./Aside/Aside";
import style from "./MainSection.module.css";

function MainSection() {
  
  return (
    <>
    <main className={style.color}>
    <Article/>
    <Aside/>
    </main>
    </>
  )
}

export default MainSection
