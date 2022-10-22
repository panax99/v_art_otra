import accueil from "./accueil.module.css"
import Image from "next/image"
function Category(){
    return(
    <>
    <div style={{background:'darkwhite'}}>
        <div className={"container mt-2" +accueil.p} style={{marginTop:'10px'}}> 
                <h1 className={accueil.tt}>Category</h1>
        </div>
        <div className="fill">
            <a href="/paint"><img src="paint.gif" className={accueil.ct1}/></a>            
        </div>
        <div >
            <a href="/crafting">
            <img src="/craft.gif" style={{}} className={accueil.ct2}/>
            </a>
        </div>
        <div>
            <a href="/sculpture">
            <img src="/sculpture.gif" style={{}} className={accueil.ct3}/>
            </a>
        </div>
        <div >
            <a href="/books" style={{}}>
            <img src="/books.gif" style={{}} className={accueil.ct4}/>
            </a>        
        </div>
    </div>
    </>
    )
}
export default Category
