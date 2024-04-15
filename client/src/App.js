import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes , Outlet } from 'react-router-dom';
import Navbar from './components/app/Navbar';
import Footer from './components/app/Footer';
import Hero from './components/app/Hero';
import Store from './components/app/Store';
import CompPage from './components/app/CompPage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'; 
import {InputForm} from './components/dashboard/AddComponent';
import AppBar from './components/dashboard/AppBar';
import SideBar from './components/dashboard/SideBar';
import styled from 'styled-components';
import UserTable from './components/dashboard/UserTable';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  bottom: 0;
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
   font-size: 2rem;
    margin: 1rem;
`

function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function DashboardPage(){
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    console.log("toggleDrawer");
      setOpen(prev => !prev);
  }

  return(
    <BoxContainer>
      <AppBar open={open} toggleDrawer={toggleDrawer} />
      <FlexContainer style={{ marginTop: '4rem', width: '100vw' }} >
        <SideBar open={open} toggleDrawer={toggleDrawer}/>
        <Outlet />
      </FlexContainer>
      <Footer/>
    </BoxContainer>
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
                <Route path="/store/page/:id" element = {<CompPage />} />
              </Route>
              <Route path="login" element={<SignIn />} />
              <Route path="sign" element={<SignUp />} />
              <Route path="/dashboard" element={<DashboardPage />}>
                  <Route path="" element={<Heading>Dashboard SCCS</Heading>} />
                  <Route path="add" element={<InputForm />} />
                  <Route path="store" element={<Store />}/> 
                  <Route path="store/page/:id" element = {<InputForm isEdit = {true}/>} />
                  <Route path="users" element = {<UserTable />} />
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
