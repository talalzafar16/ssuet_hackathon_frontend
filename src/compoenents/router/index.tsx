import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../../pages/home/page';
import Donate from '../../pages/donate/page';
import LoginSignup from '../../pages/auth/login/page';
import NGOlogin from '../../pages/auth/NGOlogin/page';
import ProfilePage from '../../pages/profile/page';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/auth/login" element={<LoginSignup />} />
        <Route path="/auth/NGOlogin" element={<NGOlogin />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router