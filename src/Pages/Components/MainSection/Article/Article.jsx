import Section from "./Section/Section";
import style from "./Article.module.css";

function Article() {

    return (
        <>
            <article className={style.color}>
                <Section />
                <Section />
                <Section />

            </article>
        </>
    )
}

export default Article
