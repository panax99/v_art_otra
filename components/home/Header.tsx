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
                    <Link href="#" style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none'}}>Home</Link>
                </div>
                <div style={{width:'55px',height:'2px',background:'white',position:'absolute',left:'150px',top:'134px'}}></div>
                <div className={header.l2}>
                    <Link href="/paint" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Paint</Link>
                </div>
                <div className={"container "+header.l3}>
                    <Link href="/crafting" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Crafting</Link>
                </div>
                <div className={"container "+header.l4}>
                    <Link href="/sculpture" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Sculpture</Link>
                </div>
                <div className={"container "+header.l5 } 
                    style={{ color:"white"}}>
                    <Link href="/books" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none'}}>Book</Link>
                </div>
                <div className={"container "+header.l6} >
                    <Link href="/others" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Others</Link>
                </div>
                <div className={"container "+header.l7}>
                    <Link href="/login" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Login</Link>
                </div>
                <div className={header.l8}>
                    <Link href="/register" className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Sign-Up</Link>
                </div>
           </div>
        </>
    )
}
export default Header
