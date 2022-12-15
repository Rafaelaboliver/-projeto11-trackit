import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from '../components/Menu/Menu';
import Navbar from '../components/Navbar/Navbar';
import LoginPage from '../pages/LoginPage/LoginPage';
import SigninPage from '../pages/SigninPage/SiginPage';
import HabitsPage from "../pages/HabitsPage/HabitsPage";
import TodayPage from '../pages/TodayPage/TodayPage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';


export default function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Menu />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<SigninPage />} />
        <Route path='/habitos' element={< HabitsPage />} />
        <Route path='/hoje' element={<TodayPage />} />
        <Route path='/historico' element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>

  );
}

