import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../../pages/home/page';
import Donate from '../../pages/donate/page';
import { Login } from '../../pages/auth/login/page';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router