import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import RoutesList from "./RoutesList";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <RoutesList />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
