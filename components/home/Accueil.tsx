import Header from "./Header";
import Footer from "./Footer";
import accueil from './accueil.module.css';
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
            
            <Propose/>              
            <Footer/>
        </>
    )
}

export default Accueil
