import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import RoutesList from "./RoutesList";
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Nav />
          <RoutesList />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
