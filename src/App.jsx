import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { UserContext } from "./CreateContext";
import { useState } from "react";

const App = () => {
  const [name,setName] = useState("Reda");
  return ( 
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{name, setName}}>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </UserContext.Provider>

      </Router>
    </>  
    );
}
 
export default App;