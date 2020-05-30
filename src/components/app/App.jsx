import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../home/Home'
import Feed from '../../containers/feed/Feed'
import ScrollToTop from '../shared/ScrollToTop'

const App = () => {

    return (
        <Router>
        <ScrollToTop />
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/feed" component={Feed}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App