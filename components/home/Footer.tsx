import React from "react";
import footer from './footer.module.css'

function Footer(){
    return(
        <>
            <div className={"navbar navbar-dark bg-dark "+footer.ft}>
                <h3 className="text-light" style={{marginLeft:'20px',marginBottom:'70px'}}>V'Art'Otra</h3><br/>
                <br/>
                <h6 className="text-light" style={{position:'absolute',top:'52px',left:'22px'}}>The website for all<br/> of your art research.</h6>
                <h6 className="text-light" style={{position:'absolute',top:'52px',left:'1210px'}}>Copyright 2022</h6>
            </div>
        </>
    )
}

export default Footer