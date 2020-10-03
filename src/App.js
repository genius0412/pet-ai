import React from "react"
import styled, { css } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import Header from "./components/header"

export default function App() {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

const MainDiv = styled.div`
  display: block;
  overflow: hidden;
  margin: 0 auto;
`;
const Main = () => {
  return(
    <MainDiv>
      <h2>Main</h2>
    </MainDiv>
  )
}

const About = () => {
  return (
    <div>About</div>
  );
}