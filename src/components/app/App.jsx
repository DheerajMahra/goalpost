import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import ScrollToTop from '../shared/ScrollToTop'
import Home from '../home/Home'
import Feed from '../feed/Feed'

const App = () => {

    return (
        <div className="App">
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/feed" component={Feed}/>
            </Switch>
        </div>
    )
}

export default App