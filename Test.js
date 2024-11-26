import { Component } from "react";


class Test extends Component {
    constructor(){
        super();
        this.state  = {
            count : 0,
            show: true
        }
    }

    componentDidMount(){
        console.log('First time Component Mounting');
    }

    componentDidUpdate(){
        console.log('Component Update');
    }

    componentWillUnmount(){
        console.log('Component will removed');
    }

    handelClick(){
         this.setState({count: this.state.count += 1, show : !(this.state.show)})
        console.log("Count: ", this.state.count)
    }

    render(){
        return(
            <div>
                <h1>Test Class Component : {this.state.count}</h1>
                <button onClick={()=> this.handelClick()}>Increment</button>
                {this.state.show ? <ShowClass /> : null}
            </div>
        )
    }
};


export default Test;

class ShowClass extends Component{
    render(){
        return(
            <h2>Show Component...</h2>
        )
    }
}