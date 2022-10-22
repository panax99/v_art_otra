import { url } from 'inspector';
import accueil from './accueil.module.css';
import Link from 'next/link';

function BestSales(){
    return(
        <>
        
        <div className={"container mt-2 "+accueil.p}> 
                <h1 className="">Best sales</h1>
            </div>
            <div className={"container mt-2 "+accueil.b}>
                <p>Let’s show you the items that have the best sales</p>
            </div>
            <div className="container-inline">
                <div className={accueil.card+" "+accueil.c_0}>
                    <div className="card-img-top"></div>
                    
                    <div className="container" style={{
                        
                        width:"300px",
                        height:"320px",
                        background:"ghostwhite",
                        marginTop:"20px",
                        marginLeft:"37px",
                        boxShadow:"6px 6px 8px 3px grey"

                    }}>
                        <div className="" style={{
                            marginLeft:"-12px",
                            width:"300px",
                            height:"150px",
                            backgroundImage: 'url(haronaR.gif)'
                        }}>

                        </div>
                        <h5 className="card-title" style={{marginTop:'15px'}}>Harona vita rofia</h5>
                        <p className="card-text" style={{marginTop:'15px'}}>Price : 10000 Ar</p>
                        <button className="btn btn-dark" style={{background:'ghostwhite',color:'black'}}>Show</button>
                        <button className="btn btn-dark" style={{marginLeft:'5px'}}>Buy</button>
                    </div>
                </div>
                <div className={accueil.card+" "+accueil.c_0}>
                    <div className="card-img-top"></div>
                    
                    <div className="container" style={{
                        
                        width:"300px",
                        height:"320px",
                        background:"ghostwhite",
                        marginTop:"-320px",
                        marginLeft:"466px",
                        boxShadow:"6px 6px 8px 3px grey"


                    }}>
                        <div className="" style={{
                            marginLeft:"-12px",
                            width:"300px",
                            height:"150px",
                            backgroundImage: 'url(haronaR.gif)'
                        }}>

                        </div>
                        <h5 className="card-title" style={{marginTop:'15px'}}>Harona vita rofia</h5>
                        <p className="card-text" style={{marginTop:'15px'}}>Price : 10000 Ar</p>
                        <button className="btn btn-dark" style={{background:'ghostwhite',color:'black'}}>Show</button>
                        <button className="btn btn-dark" style={{marginLeft:'5px'}}>Buy</button>
                    </div>
                </div>
                <div className={accueil.card+" "+accueil.c_0}>
                    <div className="card-img-top"></div>
                    
                    <div className="container" style={{
                        
                        width:"300px",
                        height:"320px",
                        background:"ghostwhite",
                        marginTop:"-320px",
                        marginLeft:"905px",
                        boxShadow:"6px 6px 8px 3px grey"


                    }}>
                        <div className="" style={{
                            marginLeft:"-12px",
                            width:"300px",
                            height:"150px",
                            backgroundImage: 'url(haronaR.gif)'
                        }}>

                        </div>
                        <h5 className="card-title" style={{marginTop:"15px"}}>Harona vita rofia</h5>
                        <p className="card-text" style={{marginTop:'15px'}}>Price : 10000 Ar</p>
                        <button className="btn btn-dark" style={{background:'ghostwhite',color:'black'}}>Show</button>
                        <button className="btn btn-dark" style={{marginLeft:'5px'}}>Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestSales
