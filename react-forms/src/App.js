// App.js
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
