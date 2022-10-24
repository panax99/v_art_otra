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
                    <Link href="#"><h2 style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none'}}>Home</h2></Link>
                </div>
                <div style={{width:'55px',height:'2px',background:'white',position:'absolute',left:'150px',top:'134px'}}></div>
                <div className={header.l2}>
                    <Link href="/paint"><h3 className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Paint</h3></Link>
                </div>
                <div className={"container "+header.l3}>
                    <Link href="/crafting"> <h3 className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Crafting</h3></Link>
                </div>
                <div className={"container "+header.l4}>
                    <Link href="/sculpture"> <h3 className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Sculpture</h3></Link>
                </div>
                <div className={"container "+header.l5 } 
                    style={{ color:"white"}}>
                    <Link href="/books"><h3 className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none'}}>Book</h3></Link>
                </div>
                <div className={"container "+header.l6} >
                    <Link href="/others"><h3 className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Others</h3></Link>
                </div>
                <div className={"container "+header.l7}>
                    <Link href="/login"><h3 className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Login</h3></Link>
                </div>
                <div className={header.l8}>
                    <Link href="/register"><h3 className={header.link} style={{ color:"white", fontSize:'larger', fontWeight:'bolder', textDecoration:'none' }}>Sign-Up</h3></Link>
                </div>
           </div>
        </>
    )
},
export default Header
