import './App.css';
import Footer from './component/Student/Footer';
import NavBar from './component/Student/NavBar';
import About from './pages/Student/About';
import Courses from './pages/Student/Courses';
import Home from './pages/Student/Home';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import StudentSignin from './pages/Student/StudentSignin';
import StudentLogin from './pages/Student/StudentLogin';
import Teach from './pages/Student/Teach';

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
