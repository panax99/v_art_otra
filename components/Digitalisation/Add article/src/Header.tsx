import style from "./add_articla.module.css";

function Header(){
    return(
        <div className={style.entete}>
                <img className={style.logo} src='./Image/Logo V\Art-Otra.png' alt=""/>
                <h1 className={style.Title_1}>V'Art-Otra</h1>
                <h1 className={style.Title_2}>ADD ARTICLE</h1>
        </div>
    )
}

export default Header;