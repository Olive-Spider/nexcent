import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Clients from "./components/Clients/Clients"
import Community from "./components/Community/Community";

const Home = () => <div>
  <Nav />
  <Hero />
  <Clients />
  <Community />
</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
