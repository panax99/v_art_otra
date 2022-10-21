/*import  '../public/assets/bootstrap/css/bootstrap.min.css'
import  '../public/assets/fonts/fontawesome-all.min.css'*/
import style from '../public/Style.module.css'
import Button from "./Button";
import Formulaire from "./Formulaire";

function Login_page(){
    return(
        <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={"card shadow-lg o-hidden border-0 my-5"+style.a}>
                            <Formulaire/>
                            <Button/>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Login_page