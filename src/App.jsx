import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";

// const Home = () => <div>Home Page</div>;

function App() {

  return (
  <Router>
    <Nav />
  </Router>
  )
}

export default App
