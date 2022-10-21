/*import  '../public/assets/bootstrap/css/bootstrap.min.css'
import  '../public/assets/fonts/fontawesome-all.min.css'*/
import style from '../public/Style.module.css'

function Butto_login(){
    return(
        <button className={style.button_login} type="submit">Login</button>
    )
}

function Button_log_fb(){
    return(
        <button className={style.button_login_with_google} type="submit">Connect with Google</button>
    )
}

function Button_log_G(){
    return(
        <button className={style.button_login_with_facebook} type="submit">Connect with Facebook</button>
    )
}

function Button(){
    return(
        <>
            <hr className={style.ligne_1}/>
            <Butto_login/>
            <hr className={style.ligne_2}/>
            <Button_log_fb/>
            <Button_log_G/>
        </>
    )
}
export default Button