import { Component } from "react";

class Manual_Increment extends Component{
    constructor(props){
        super(props)
        this.state = {n : 0}

    }

    increment(){
        this.setState({n: this.state.n + 1})
    }


    render(){
        return <div>Valuer : {this.state.n} <button onClick={this.increment.bind(this)}>Incrementer</button></div>
    }
}
export default Manual_Increment;