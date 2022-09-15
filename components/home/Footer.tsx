import React from "react";
import footer from './footer.module.css'

function Footer(){
    return(
        <>
            <div className={"navbar navbar-dark bg-dark "+footer.ft}>
                
                <p className="text-light">Copyright 2022</p>
            </div>
        </>
    )
}

export default Footer