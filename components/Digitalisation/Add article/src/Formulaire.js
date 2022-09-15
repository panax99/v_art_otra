import {Component} from "react";

class Formulaire extends Component{
    constructor(props){
        super(props)
        this.state = {
            Nom : '',
            Prenom : '',
            newletter : false
        }
        this.change = this.change.bind(this)
    }

    change(e){
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name] : value
        })
    }

    render(){
        return <div>
            <div>
                <label htmlFor="champ_nom">Nom</label>
                <input type="texte" id="champ_nom" value={this.state.Nom} name="Nom" onChange={this.change}/>
            </div>
            <div>
                <label htmlFor="champ_prenom">Prénom</label>
                <input type="texte" id="champ_prenom" value={this.state.Prenom} name="Prenom" onChange={this.change}/>
            </div>
            <div>
                <label htmlFor="champ_cheked">S'abonner?</label>
                <input type="checkbox" id="champ_cheked" checked={this.state.newletter} name="Newletter" onChange={this.change}/>
            </div>
            {JSON.stringify(this.state)}
        </div>
    }
}

export default Formulaire;