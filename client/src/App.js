import { BrowserRouter as Router, Route, Routes , Outlet } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Store from './components/Store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { InputForm } from './components/addComponent';

function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function Dashboard(){
  return(
    <>
      <Outlet />
    </>
  )
}


function App() {
  return (
    <div className="App">
        <Router>
          <Routes> 
              <Route path="/" element={<Main />}>
                <Route path="/" element={<Hero />} />
                <Route path="store" element={<Store />}/> 
              </Route>
              <Route path="login" element={<SignIn />} />
              <Route path="sign" element={<SignUp />} />
              <Route path="Dashboard" element={<Dashboard />}>
                  <Route path="add" element={<InputForm />} />
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
