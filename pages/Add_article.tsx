import { NextPage } from "next";
import Head from "next/head";
import Ajout_article from "../components/Digitalisation/Add article/src/add_article";

const Add_article : NextPage = () =>{
    return(
        <>
            <Head>
                <title>V-art-otra</title>
                <meta name="description" content="Arts marketplace for everyone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Ajout_article/>
        </>
    )
}

export default Add_article;