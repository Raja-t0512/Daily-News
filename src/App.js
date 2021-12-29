import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import ErrorPage from './components/ErrorPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
const App = () => {
  const [mode, setMode] = useState('light')
  const [progress, setProgress] = useState(0)

  let togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#111111';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'whitesmoke';
    }
  }
  //Variables
  let pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  //GO to newsapi.org create an account and replace your api key below
  // apiKey = "your api key";

  useEffect(() => {
    document.body.style.backgroundColor = 'whitesmoke';
  }, [])
  return (
    <>
      <Router>
        <NavBar mode={mode} togglemode={togglemode} />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={2.7}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} key="general" mode={mode} pageSize={pageSize} apiKey={apiKey}
              category='general' />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} key="business" mode={mode} pageSize={pageSize} apiKey={apiKey} category='business' />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} key="entertainment" mode={mode} pageSize={pageSize} apiKey={apiKey} category='entertainment' />
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} key="health" mode={mode} pageSize={pageSize} apiKey={apiKey} category='health' />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} key="science" mode={mode} pageSize={pageSize} apiKey={apiKey} category='science' />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} key="sports" mode={mode} pageSize={pageSize} apiKey={apiKey} category='sports' />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} key="technology" mode={mode} pageSize={pageSize} apiKey={apiKey} category='technology' />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;