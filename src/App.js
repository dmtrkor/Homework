
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigation></Navigation>
          <Header></Header>


            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path='/*' element={<Error/>} />
            </Routes>

          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
