import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero"

// const Home = () => <div>Home Page</div>;

function App() {

  return (
  <Router>
    <Nav />
    <Hero />
  </Router>
  )
}

export default App
