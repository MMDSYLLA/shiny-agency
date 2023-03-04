import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index-api-loader'
import Survey from './pages/survey/index-api-loader'
import Results from './pages/Results/index-api-loader'
import Freelances from './pages/Freelances/index-api-loader'
import Header from './components/Header/index-api-loader'
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
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
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
