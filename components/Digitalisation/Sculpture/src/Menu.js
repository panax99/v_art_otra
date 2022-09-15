import{ Component } from "react";
import React from "react"
import "./style_Peinture_page.css"
import Menu_ico from "./Icone/Menu.png"
import Favoris_ico from "./Icone/Favoris.png"
import New_ico from "./Icone/new.png"
import Recent_ico from "./Icone/recent.png"
import Top_ico from "./Icone/badge.png"
import Article_2_liste from "./article_2";

class New_button extends Component{
    show_new_article(){
        return (
            <Article_2_liste/>
        )
    }

    render(){
        return(
            <button className="menu_new_button"><img className="new_icone" src={New_ico} alt="" onClick={this.show_new_article}/>New</button>
        )
    }
}

class Favoris_button extends Component{
    render(){
        return(
            <button className="menu_favori_button"><img className ="Fav_icone" src={Favoris_ico} alt="" onClick={this.show_favoris_article}/>Favoris</button>
        )
    }
}

class Recent_button extends Component{
    render(){
        return(
            <button className="menu_recent_button"><img className="recent_icone" src={Recent_ico} alt=""/>Recent</button>
        )
    }
}

class Top_button extends Component{
    render(){
        return(
            <button className="menu_top_button"><img className="top_icon" src={Top_ico} alt=""/>Top</button>
        )
    }
}

class Menu extends Component{
    
    render(){
        return(<React.Fragement>
            <div className="menu">
                <h1 className="page_title">Sculpture</h1>
                <img className="menu_ico"src={Menu_ico} alt=""/>
                <h3 className="Menu_title">Menu</h3>
                <Favoris_button/>
                <New_button/>
                <Recent_button/>
                <Top_button/>
            </div>
        </React.Fragement>
        )
    }
}


export default Menu;