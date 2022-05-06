import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
            <div>
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className='count'>{this.state.counter}</span>
                <div>
                    <button onClick={this.reset} className="reset">Reset</button>
                </div>
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

    decrement(by) {
        console.log(`decrement form child - ${by}`)
        this.setState((prevState) => {
            return { counter: prevState.counter - by }
        }
        )
    }
    reset() {
        console.log("Reset");
        this.setState(
            {
                counter: 0
            }
        );
    }


}
class CounterButton extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         counter: 0
    //     }

    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    // }
    render() {
        return (
            <div className='counter' >
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/* <span className='count'>{this.state.counter}</span> */}
            </div>
        )
    }

    // increment() {
    //     //this.state.counter++;//Bad Practice
    //     console.log("Increment")
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     })
    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement() {
    //     console.log("decrement")
    //     this.setState(
    //         {
    //             counter: this.state.counter - this.props.by
    //         }
    //     )
    //     this.props.decrementMethod(this.props.by)
    // }

}

CounterButton.defaultProps = {
    by: 1
}

export default Counter;