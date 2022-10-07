import style from "./add_articla.module.css";

function Div_right(){
    return(
        <div className={style.form}>
            <input className={style.input_1} type="text" placeholder="Article Name" id="input_Article_Name"/>
            <input className={style.input_2} type="text" placeholder="Article Author" id="input_Article_Author"/>
            <input className={style.input_3} type="text" placeholder="Article Cost" id="input_Article_Cost"/>
            <h2 className={style.ins_img}>Insert Image</h2>
            <input className={style.ins_file} type="file" name="" id="inp_file"/>
            <input className={style.input_4} type="text" placeholder="Article Categorie" id="input_Article_Categorie"/>
            <h2 className={style.ins_date}>Date of conception</h2>
            <input className={style.input_5} type="date" placeholder="" id="input_Article_Date"/>
            <button className={style.Done}>Done</button>

        </div>
    )
}

export default Div_right;