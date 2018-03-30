import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class Counter extends Component {
    render() {
        return (
            <section className='main' onClick={() => this.props.increment(this.props.index)}>
                {this.props.element}
            </section>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        increment: (index) => dispatch({ type: 'INCREMENT', index })
    }
}

export default connect(undefined, mapDispatchToProps)(Counter)