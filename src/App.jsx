import React, { Component } from 'react'
import Counter from './components/Counter'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const count = this.props.state.map((element, index) => {
            return <Counter store={this.props.store} index={index} element={element} key={index} />
        })
        return (

            <section id='container'>
                <section >{count}</section> 
            </section>

        )
    }
}

const mapStateToProps = (state) => {
    return { state }
}


export default connect(mapStateToProps)(App)