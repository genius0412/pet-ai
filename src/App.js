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
        <Route>
          <Project/>
        </Route>
      </Switch>
    </Router>
  );
}

const MainDiv = styled.div`
  padding-left: 27%;
  padding-top: 15%;
  font-size: 4rem;
  font-weight: bold;
`; 
const Main = () => {
  return(
    <MainDiv>
      인공지능 펫을 지금 만나보세요
    </MainDiv>
  )
}

const AboutDiv = styled.div`
  padding-left: 27%;
  padding-top: 15%;
  font-size: 4rem;
  font-weight: bold;
`;
const About = () => {
  return (
    <AboutDiv>
      Genius0412 가 만든 인공지능 펫 <br/>
      used tensorflow.js, react
    </AboutDiv>
  );
}

const ProjectDiv = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
`;

const ProjectRun = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 3rem;
  font-size: 2rem;
  color: white;
  background: rgb(132,123,255);
  background: linear-gradient(90deg, rgba(132,123,255,1) 0%, rgba(0,212,255,1) 100%);
  text-decoration: none;
  border: none;
  &:focus{
    outline:0;
  }
  &:hover{
    opacity: 80%; 
  }
`;

const Arrow = styled.span`
  position: absolute;
  margin-top: 100px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #888888;
  border-bottom: 1px solid #888888;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb 2s infinite;
  animation: sdb 2s infinite;
  box-sizing: border-box;
`
const Project = () => {
  return (
    <ProjectDiv>
      프로젝트를 실행해보세요 <br/>
      <ProjectRun>&nbsp;&nbsp;프로젝트 실행&nbsp;&nbsp;&nbsp;{"〉"}&nbsp;</ProjectRun>
    </ProjectDiv>
  )
}