import Header from "./Header";
import Footer from "./Footer";
import accueil from './accueil.module.css'

function Accueil(){
    return(
        <>            
            <Header/>
            <div className={accueil.fill}>
                <img src="fond.png" className="i" alt=""/>
            </div>
            <div className="container begin">
                
            </div>
            <div className={"container mt-2 "+accueil.p}> 
                <h1 className="">Best sales</h1>
            </div>
            <div className={"container mt-2 "+accueil.b}>
                <p>Let’s show you the items that have the best sales</p>
            </div>
            <div className="container-inline">
                <div className={accueil.card+" "+accueil.c_0}>
                    <div className="card-img-top"></div>
                    <img src="C:\Users\Pana\Desktop" className="card-img-top" alt=""></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
                <div className={accueil.card+ " "+accueil.c_1}>
                    <div className="card-img-top"></div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
                <div className={accueil.card +  " "+accueil.c_2}>
                    <div className="card-img-top"></div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">Buy</button>
                    </div>
                </div>
            </div>
            <div className={"container mt-2" +accueil.p}> 
                <h1 className={accueil.tt}>Category</h1>
            </div>
            <div className="fill">
                <img src="craft.png" className={"jumbotron "+accueil.ct1}/>
                <a href="/" className={accueil.ll1}>Paint</a>
            </div>
            <div className={"jumbotron "+accueil.ct2}>
                <a href="/" className={accueil.ll2}>Sculpture</a>
            </div>
            <div className={"jumbotron "+accueil.ct3}>
                <a href="/" className={accueil.ll3}>Crafting</a>
            </div>
            <div className={"jumbotron "+accueil.ct4}>
                <a href="/" className={accueil.ll4}>Books</a>
            </div>
            <img src="/craft.png" alt="" />
            <Footer/>
        </>
    )
}

export default Accueil