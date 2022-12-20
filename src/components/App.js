import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from '../components/Menu/Menu';
import Navbar from '../components/Navbar/Navbar';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import HabitsPage from "../pages/HabitsPage/HabitsPage";
import TodayPage from '../pages/TodayPage/TodayPage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';
import { UserInfoContext } from '../contexts/UserInfoContext';
import { useState } from "react";


export default function App() {
  const [token, setToken] = useState('');
  const [image, setImage] = useState('');
  const [percentage, setPercentage] = useState('')
  


  return (

    <BrowserRouter>
      <UserInfoContext.Provider value={{ token, setToken, image, setImage, percentage, setPercentage}}>
        {/*<Navbar />*/}
        {/*<Menu />*/}
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/cadastro' element={<SignUpPage />} />
          <Route path='/habitos' element={< HabitsPage />} />
          <Route path='/hoje' element={<TodayPage />} />
          <Route path='/historico' element={<HistoryPage />} />
        </Routes>
      </UserInfoContext.Provider>
    </BrowserRouter>

  );
}

