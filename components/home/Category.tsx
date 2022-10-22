import accueil from "./accueil.module.css"
import Image from "next/image"
import Link from "next/link"
function Category(){
    return(
    <>
    <div style={{background:'darkwhite'}}>
        <div className={"container mt-2" +accueil.p} style={{marginTop:'10px'}}> 
                <h1 className={accueil.tt}>Category</h1>
        </div>
        <div className="fill">
            <Link href="#"><Image src="paint.gif" alt="test" className={"jumbotron "+accueil.ct1}/></Link>            
        </div>
        <div >
            <Link href="#">
            <Image src="/craft.gif" alt="test" className={"jumbotron "+accueil.ct2}/>
            </Link>
        </div>
        <div>
            <Link href="#">
            <Image src="/sculpture.gif" alt="test" className={"jumbotron "+accueil.ct3}/>
            </Link>
        </div>
        <div >
            <Link href="#">
            <Image src="/books.gif" alt="test" className={"jumbotron "+accueil.ct4}/>
            </Link>        
        </div>
    </div>
    </>
    )
}
export default Category
