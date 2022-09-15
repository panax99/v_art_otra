import { Component } from "react";
import "./style_add_articla.css";

class Div_Right extends Component{
    render(){
        return(
            <div className="form">
                <input className="input_1" type="text" placeholder="Article Name" id="input_Article_Name"/>
                <input className="input_2" type="text" placeholder="Article Author" id="input_Article_Author"/>
                <input className="input_3" type="text" placeholder="Article Cost" id="input_Article_Cost"/>
                <h2 className="ins_img">Insert Image</h2>
                <input className="ins_file" type="file" name="" id="inp_file"/>
                <input className="input_4" type="text" placeholder="Article Categorie" id="input_Article_Categorie"/>
                <h2 className="ins_date">Date of conception</h2>
                <input className="input_5" type="date" placeholder="" id="input_Article_Date"/>
                <button className="Done">Done</button>

            </div>
        )
    }
}
export default Div_Right;