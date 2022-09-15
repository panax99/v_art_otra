import { Component } from "react";
import "./style_add_articla.css";
import Logo from './Image/Logo V\'Art-Otra.png'

class Head extends Component {
    render() {
        return (<div>
            <div className="entete">
                <img className="logo" src={Logo} alt=""/>
                    <h1 className="Title_1">V'Art-Otra</h1>
                    <h1 className="Title_2">ADD ARTICLE</h1>
            </div>
        </div>)
    }
}

export default Head;