import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/survey'
import Header from './components/Header'
import Error from  './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/survey/:questionNumber">
                    <Survey />
                </Route>

                <Route path="/results">
                    <Results />                  
                </Route>

                <Route path="/freelances">
                   <Freelances />
                </Route>

                <Route path="error">
                    <Error />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)