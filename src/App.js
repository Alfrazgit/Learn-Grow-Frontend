import Home from './Pages/Home';
import About from './Pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Teacher from './Pages/Teacher';
import Parent from './Pages/Parent';
import Student from './Pages/Student';
import Studentall from './Pages/Studentall';
import Parentall from './Pages/Parentall';
import Teacherall from './Pages/Teacherall'
import Admin from './Pages/Admin';
import Contact from './Pages/Contact';
import Signin from './Pages/Signin';
import Signadmin from './Pages/Signadmin';
import Forget from './Pages/Forgetpassword';
import Notice from './Pages/Notice';
import Calender from './Pages/Calender';
import Addstudent from './Pages/Addstudent';
import Addparent from './Pages/Addparent';
import Addteacher from './Pages/Addteacher';
import Addadmin from './Pages/Addadmin';
import Admission from './Pages/Admission';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacherall" element={<Teacherall />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/student" element={<Student />} />
        <Route path="/studentall" element={<Studentall />} />

        <Route path="/parent" element={<Parent />} />
        <Route path="/parentall" element={<Parentall />} />


        <Route path="/signin" element={<Signin />} />
        <Route path="/signadmin" element={<Signadmin />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/addadmin" element={<Addadmin/>}/>
        <Route path="/addstudent" element={<Addstudent/>}/>
        <Route path="/addparent" element={<Addparent/>}/>
        <Route path="/addteacher" element={<Addteacher/>}/>
        <Route path='/admission' element={<Admission/>}/>




      </Routes>

      <Footer />
      
    </Router>


  );
}

export default App;
