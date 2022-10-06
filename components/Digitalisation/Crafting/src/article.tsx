import style from "./crafting.module.css"


function Article(){
    return(
        <>
            <div className={style.article}>
                <img className={style.img_1} src="./Image/Peinture_1.jpg" alt=""/>
                <button className={style.info_button}><img className="info_icon" src="./Icone/Info.png" alt="" /></button>
                <button className={style.fav_button}><img className="info_icon" src="./Icone/Favoris_component.png" alt=""/></button>
                <button className={style.buy_button}><img className="info_icon" src="./Icone/shopping-cart.png" alt=""/></button>
            </div>
        </>
    )
}
export default Article;