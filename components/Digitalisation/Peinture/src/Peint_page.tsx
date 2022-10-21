import Header from './head'
import Article from './article'
import  Style  from './peint.module.css'
import Menu from './Menu'

function Peint_page(){
    return(
        <>     
            <Header/>
            <div className={Style.article_liste}>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>
            <Menu/>
        </>
    )
}

export default Peint_page;