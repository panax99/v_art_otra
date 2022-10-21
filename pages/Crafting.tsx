import { NextPage } from "next";
import Head from "next/head";
import Crafting_page from "../components/Digitalisation/Crafting/src/Crafting_page";

const Crafting : NextPage = () => {
    return(
        <>
            <Head>
                <title>V-art-otra</title>
                <meta name="description" content="Arts marketplace for everyone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Crafting_page/>
        </>
    )
}

export default Crafting;