import { Component } from "react";
import Sary from "./Image/pexels-tnarg-2685254.jpg"
import "./style_add_articla.css";

class Div_Left extends Component{
    render(){
        return(
            <div className="image">
                <img className="im_background" src={Sary} alt=""/>
            </div>
        )
    }
}
export default Div_Left;