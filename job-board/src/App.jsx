import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Joblistings from "./components/Joblistings";
import Employerdash from './components/Employerdash';
import Jobseekerdash from './components/Jobseekerdash';
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {


  return (
    <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path="/" element={<Home />}> </Route>
      <Route path="/Joblistings" element={<Joblistings />} ></Route>
      <Route path="/Employerdash" element={<Employerdash />} ></Route>
      <Route path="/Jobseekerdash" element={<Jobseekerdash />} ></Route>
      <Route path="/Signup" element={<Signup />} ></Route>
      <Route path="/Login" element={<Login />} ></Route>




    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
