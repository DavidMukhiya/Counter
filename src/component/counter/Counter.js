import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
    }

    render() {
        return (
            <div>
                <CounterButton by={1} incrementMethod={this.increment} />
                <CounterButton by={5} incrementMethod={this.increment} />
                <CounterButton by={10} incrementMethod={this.increment} />
                <span className='count'>{this.state.counter}</span>
            </div>
        )
    }

    increment(by) {
        console.log(`increment form child - ${by}`)
        this.setState((prevState) => {
            return { counter: prevState.counter + by }
        }
        )

    }
}
class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }
    render() {
        return (
            <div className='counter' >
                <button onClick={this.increment}>+{this.props.by}</button>
                {/* <span className='count'>{this.state.counter}</span> */}
            </div>
        )
    }

    increment() {
        //this.state.counter++;//Bad Practice
        console.log("Increment")
        this.setState({
            counter: this.state.counter + this.props.by
        })
        this.props.incrementMethod(this.props.by);
    }

}

CounterButton.defaultProps = {
    by: 1
}

export default Counter;