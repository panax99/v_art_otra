import { NextPage } from "next";
import Head from "next/head";
import Peint_page from "../components/Digitalisation/Peinture/src/Peint_page";


const Paint : NextPage = () =>{
    return(
        <>
            <Head>
                <title>V-art-otra</title>
                <meta name="description" content="Arts marketplace for everyone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Peint_page/>
        </>
        
    )
}
export default Paint