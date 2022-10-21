import accueil from "./accueil.module.css"
export default function Sary(){
    return(
        <>
            <div className={accueil.fill}>
            <img src="fond.png" className="i" alt=""/>
            <div className="container" 
            style={
                {
                    width:"350px",
                    height:"320px", 
                    background:"white", 
                    position:"absolute",
                    left:"0px",
                    bottom:"75px",
                    opacity:0.9,
                }
            }>
                <div style={{marginLeft:'20px',marginTop:'58px'}}>
                    <h3 style={{opacity:1}}>The best marketplace <br/>for all your art<br/> research</h3>
                    <button className="btn btn-dark" style={{marginTop:'30px',width:'186px'}}><h5>Let's begin</h5></button>
                </div>
            </div>                      

            </div>
            <div className="container begin">   
            </div>
        </>
    )
}