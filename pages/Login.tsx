import { NextPage } from "next";
import Head from "next/head";
/*import  '../components/Digitalisation/Login/public/assets/bootstrap/css/bootstrap.min.css'
import  '../components/Digitalisation/Login/public/assets/fonts/fontawesome-all.min.css'*/
import style from '../components/Digitalisation/Login/public/Style.module.css'
import Login_page from "../components/Digitalisation/Login/src/Login_page";

const Login : NextPage = () =>{
    return(
        <>
            <Head>
                <title>V-art-otra</title>
                <meta name="description" content="Arts marketplace for everyone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={style.body}>
                <Login_page/>
            </div>
        </>
    )
}

export default Login;