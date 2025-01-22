import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../../pages/home/page.tsx";
import Donate from '../../pages/donate/page';
import LoginSignup from '../../pages/auth/login/page';
import NGOlogin from '../../pages/auth/NGOlogin/page';
import Signup from '../../pages/auth/signup/page.tsx';
import OtpScreen from '../../pages/auth/otp/page.tsx';

import MyRequest from "../../pages/MyRequests/index"
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/auth/login" element={<LoginSignup />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/otp" element={<OtpScreen />} />
        <Route path="/auth/NGOlogin" element={<NGOlogin />} />
        <Route path="/requests" element={
          <MyRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router