import accueil from "./accueil.module.css"

function Category(){
    return(
    <>
    <div style={{background:'darkwhite'}}>
        <div className={"container mt-2" +accueil.p} style={{marginTop:'10px'}}> 
                <h1 className={accueil.tt}>Category</h1>
        </div>
        <div className="fill">
            <a href="#"><img src="paint.gif" className={"jumbotron "+accueil.ct1}/></a>            
        </div>
        <div >
            <a href="#">
            <img src="/craft.gif" alt="" style={{}} className={"jumbotron "+accueil.ct2}/>
            </a>
        </div>
        <div>
            <a href="#">
            <img src="/sculpture.gif" alt="" style={{}} className={"jumbotron "+accueil.ct3}/>
            </a>
        </div>
        <div >
            <a href="#" style={{}}>
            <img src="/books.gif" alt="" style={{}} className={"jumbotron "+accueil.ct4}/>
            </a>        
        </div>
    </div>
    </>
    )
}
export default Category