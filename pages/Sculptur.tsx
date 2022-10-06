import { NextPage } from "next";
import Sculptur_page from "../components/Digitalisation/Sculpture/src/Sculptur_page";
import Head from "next/head";

const Sculptur : NextPage = () =>{
    return(
        <>
            <Head>
                <title>V-art-otra</title>
                <meta name="description" content="Arts marketplace for everyone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sculptur_page/>
        </>
    )
}

export default Sculptur;