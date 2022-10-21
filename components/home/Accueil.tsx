import Header from "./Header";
import Footer from "./Footer";
import accueil from './accueil.module.css';
import Register from "../Inscripotion_page/Register";
import Category from "./Category";
import BestSales from "./BestSales";
import Sary from "./Sary";
import Propose from "./Propose";

function Accueil(){
    return(
        <>            
            <Header/>
            <Sary/>
            <BestSales/>
            <Category/> 
            <Propose/>              
            <Footer/>
        </>
    )
}

export default Accueil