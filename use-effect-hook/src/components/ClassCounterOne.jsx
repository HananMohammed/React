import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} Times`
    }
    
    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} Times`

    }
    render() {
        return (
            <div>
                <button onClick={ () => this.setState( {count: this.state.count} ) }> click {this.state.count+1} times</button> 
            </div>
        )
    }
}

export default ClassCounterOne
