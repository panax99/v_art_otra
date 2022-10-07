/*import  '../public/assets/bootstrap/css/bootstrap.min.css'
import  '../public/assets/fonts/fontawesome-all.min.css'*/
import style from '../public/Style.module.css'


function Formulaire(){
    return(
        <>
            <h4 className={style.Entete}>Sign in</h4>
            <form className={style.user}>
                <input className={style.input_email} type="email" id="IdEmail" aria-describedby="emailHelp" placeholder="Email" name="email"/>
                <input className={style.input_password} type="password" id="Password" placeholder="Password" name="password"/>
            </form>
        </>
        
    )
}

export default Formulaire;