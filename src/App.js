import {React,useState} from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './User/Login';
import Register from './User/Register'
import MainPage from './Components/MainPage';
import './App.css';
import { MyContext } from "./MyContext";


const App = () => {
  
  const [text,setText] = useState(false);
  const [loggedIn,setLoggedIn] = useState(false);
  const [show,setShow] = useState(false);
  const [edit,setEdit] = useState(0);

  return (
    <>
    <MyContext.Provider value = {{text,loggedIn,setText,setLoggedIn,show,setShow,edit,setEdit}} >
    <Routes>      
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<Register  />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </MyContext.Provider>
    </>
  );
};

export default App;