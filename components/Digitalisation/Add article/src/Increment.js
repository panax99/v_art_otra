import { Component } from "react";

class Increment extends Component{
    constructor(props){
        super(props)
        this.state = {n: this.props.start, timer : null}
        this.Button = this.Button.bind(this)
        this.reset = this.reset.bind(this)

    }

    componentDidMount(){
        this.play()
    }

    componentWillUnmount(){
        window.clearInterval(this.state.timer)
    }

    increment(){
        this.setState({n: this.state.n + 1})
    }

    pause(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer : null
        })
    }

    play(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer : window.setInterval(this.increment.bind(this),1000)
        })
    }

    label(){
        return this.state.timer ? 'Pause' : 'Play'
    }

    reset(){
        this.pause()
        this.play()
        this.setState((state,props)=>({
            n : props.start
        }))
    }

    Button(){
        return this. state.timer ? this.pause() : this.play()
    }

    render(){
        return <div>
            Valeur:{this.state.n} 
            <button onClick={this.Button}>{this.label()}</button>
            <button onClick={this.reset}>Reset</button>
        </div>
    }
}

export default Increment;