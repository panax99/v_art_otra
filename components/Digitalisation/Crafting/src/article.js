import { Component } from "react";
import "./style_Peinture_page.css"
import Image from "./Image/Peinture_1.jpg"
import Info_ico from "./Icone/Info.png"
import Favoris_ico from "./Icone/Favoris_component.png"
import Shopping_ico from "./Icone/shopping-cart.png"
//import {creatPortal} from "react-dom"

class Article extends Component{
    render(){
        return(
            <div className="article">
                <img className="img_1"src={Image} alt=""/>
                <button className="info_button"><img className="info_icon" src={Info_ico} alt="" /></button>
                <button className="fav_button"><img className="info_icon" src={Favoris_ico} alt=""/></button>
                <button className="buy_button"><img className="info_icon" src={Shopping_ico} alt=""/></button>
            </div>
        )
    }
}


class Article_liste extends Component{
    render(){
        return(
            <div className="article_liste">
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>
        )
    }
}

export default Article_liste;