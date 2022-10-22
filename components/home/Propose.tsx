
function Propose(){
    return(
        <>
        <div style={{background:'ghostwhite',marginTop:'35px',marginBottom:'25px'}}>
            <div className="container" style={{
                width:'650px',
                height:'380px',
                backgroundImage:'url(proposeR.gif)',
                marginLeft:'0px',
                marginTop:'10px',
                borderTopRightRadius:'10px',
                borderBottomRightRadius:'10px'
                }}>

            </div>
            <div className="jumbotron" style={{marginLeft:'660px',marginTop:'-360px'}}>
                <p style={{fontSize:'45px',marginTop:'200px'}}>
                    What this website<br/>propose to you?
                </p>
                <p style={{fontSize:'20px'}}>Our first initiative is to promote Malagasy Art in every aspects<br/> of his beauty. That is a platform that help the customers to find <br/>what they need and the artists to expose their art.</p>
                <input type="text" className="form-control form-control-dark" style={{width:'200px'}} name="" id="" />
                <button className="btn btn-dark" style={{}}>Send Feedback</button>
            </div>
        </div>
        </>
    )
}
export default Propose
