import style from './peint.module.css';


function Header(){
    return(
        <>
            <div className={style.entete}>
                <img className= {style.logo} src="./Logo V'Art-Otra.png" alt=""/>
                <h1 className={style.Title_1}>V'Art-Otra</h1>
                <input className={style.search_bar} type="search"/>
                <button className={style.search_button}><img className={style.ico_research} src="./Icone/Search.png" alt=""/></button>
                <div className={style.link_bar}>
                    <a className={style.new_link}href="">New</a>
                    <a className={style.paint_link} href="">Paint</a>
                    <a className={style.sculptur_link} href="">Sculptur</a>
                    <a className={style.crafting_link} href="">Crafting</a>
                    <a className={style.books_link} href="">Books</a>
                </div>
            </div>
        </>
    )
}
export default Header; 