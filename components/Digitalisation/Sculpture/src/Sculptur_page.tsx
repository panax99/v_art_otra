import Header from './head'
import Article from './article'
import  Style  from './Sculptur.module.css'
import Menu from './Menu'

function Sculptur_page(){
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

export default Sculptur_page;