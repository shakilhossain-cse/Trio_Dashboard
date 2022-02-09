import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/dashboard" />)}/>
          <Route path={`/dashboard`} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
