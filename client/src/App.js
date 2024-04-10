import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Landing }from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Store from './components/Store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/store" element={<Store />} />
          <Route path='/playground' element = {<Store />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
