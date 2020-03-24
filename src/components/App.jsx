import React, { Component } from 'react'
import Main from './main'
import Card from './card'

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <Main />
                <Card />
            </div>
        )
    }
}