import header from './header.module.css'
import Link from 'next/link'
function Header(){
    return(
        <>
            <div className={"navbar navbar-dark bg-dark "+header.a}>
                <div className="container ml-50 mt-30">
                    <Link href="#">
                        <h2 className={"text-light "+header.title} style={{top:"sticky"}}>V&apos;Art&apos;otra</h2>
                    </Link>
                    <div className="form-group">
                        <input className="form-control form-control-color-dark" id={header.search} type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className={header.l1}>
                    <Link href="/">
                        <p style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none'}}>Home</p>
                    </Link>
                </div>
                <div style={{width:'55px',height:'2px',background:'white',position:'absolute',left:'150px',top:'134px'}}></div>
                <div className={header.l2}>
                    <a href="/paint" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Paint</a>
                </div>
                <div className={"container "+header.l3}>
                    <a href="/crafting" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Crafting</a>
                </div>
                <div className={"container "+header.l4}>
                    <a href="/sculpture" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Sculpture</a>
                </div>
                <div className={"container "+header.l5 } 
                    style={{ color:"white"}}>
                    <a href="/books" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none'}}>Book</a>
                </div>
                <div className={"container "+header.l6} >
                    <a href="/others" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Others</a>
                </div>
                <div className={"container "+header.l7}>
                    <a href="/login" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Login</a>
                </div>
                <div className={header.l8}>
                    <a href="/register" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Sign-Up</a>
                </div>
           </div>
        </>
    )
}
export default Header
