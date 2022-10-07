import header from './header.module.css'

function Header(){
    return(
        <>
            <div className={"navbar navbar-dark bg-dark "+header.a}>
                <div className="container ml-50 mt-30">
                    <h2 className={"text-light "+header.title}>V'Art'otra</h2>
                    <div className="form-group">
                        <input className="form-control form-control-color-dark" id={header.search} type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className={header.l1}>
                    <a href="/" className={header.link}>Home</a>
                </div>
                <div className={header.l2}>
                    <a href="/Paint" className={header.link}>Paint</a>
                </div>
                <div className={"container "+header.l3}>
                    <a href="/Crafting" className={header.link}>Crafting</a>
                </div>
                <div className={"container "+header.l4}>
                    <a href="/Sculptur" className={header.link}>Sculpture</a>
                </div>
                <div className={"container "+header.l5}>
                    <a href="/" className={header.link}>Book</a>
                </div>
                <div className={"container "+header.l6}>
                    <a href="/" className={header.link}>Others</a>
                </div>
                <div className={"container "+header.l7}>
                    <a href="/Login" className={header.link}>Login</a>
                </div>
                <div className={header.l8}>
                    <a href="/" className={header.link}>Sign-Up</a>
                </div>
           </div>
        </>
    )
}
export default Header