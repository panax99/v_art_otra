import style from './peint.module.css'
import React from "react"

function New_button(){
    return(
        <button className={style.menu_new_button}><img className="new_icone" src="./Icone/Menu.png" alt=""/>New</button>
    )
}

function Favoris_button(){
    return(
        <button className={style.menu_favori_button}><img className ="Fav_icone" src="./Icone/Favoris.png" alt=""/>Favoris</button>
    )
}

function Recent_button(){
    return(
        <button className={style.menu_recent_button}><img className="recent_icone" src="./Icone/recent.png" alt=""/>Recent</button>
    )
}

function Top_button(){
    return(
        <button className={style.menu_top_button}><img className="top_icon" src="./Icone/badge.png" alt=""/>Top</button>
    )
}

function Menu(){
    return(
        <>
            <React.Fragment>
                <div className={style.menu}>
                <h1 className={style.page_title}>Paint</h1>
                <img className={style.menu_ico}src="./Icone/Menu.png" alt=""/>
                <h3 className={style.Menu_title}>Menu</h3>
                <Favoris_button/>
                <New_button/>
                <Recent_button/>
                <Top_button/>
                </div>
            </React.Fragment>
        </>
    )
}

export default Menu;