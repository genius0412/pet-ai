import React from "react"
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
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}
