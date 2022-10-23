import "./App.css";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
