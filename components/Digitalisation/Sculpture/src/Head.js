import { Component } from "react";
import "./style_Peinture_page.css"
import Logo from "./Image/Logo V'Art-Otra.png"
import Searc_ico from "./Icone/Search.png"
class Head extends Component{
    render(){
        return(
            <div className="entete">
                <img className= "logo"src={Logo} alt=""/>
                <h1 className="Title_1">V'Art-Otra</h1>
                <input className="search_bar" type="search"/>
                <button className="search_button"><img className="ico_research" src={Searc_ico} alt=""/></button>
                <div className="link_bar">
                    <a className="new_link"href="">New</a>
                    <a className="paint_link" href="">Paint</a>
                    <a className="sculptur_link" href="">Sculptur</a>
                    <a className="crafting_link" href="">Crafting</a>
                    <a className="books_link" href="">Books</a>
                </div>
            </div>
        )
    }
}
export default Head;