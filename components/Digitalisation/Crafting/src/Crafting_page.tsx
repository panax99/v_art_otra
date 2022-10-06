import Header from './head'
import Article from './article'
import  Style  from './crafting.module.css'
import Menu from './Menu'

function Crafting_page(){
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

export default Crafting_page;