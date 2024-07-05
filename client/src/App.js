import './App.css';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import About from './pages/About';
import Courses from './pages/Courses';
import Home from './pages/Home';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import StudentSignin from './pages/StudentSignin';
import StudentLogin from './pages/StudentLogin';
import Teach from './pages/Teach';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/aboutus' element={<About />} />
            <Route path='/signin' element={<StudentSignin />} />
            <Route path='/login' element={<StudentLogin />} />
            <Route path='/teach' element={<Teach />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
