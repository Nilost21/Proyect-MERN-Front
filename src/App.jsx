import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components extras
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import ConfirmAccount from './pages/ConfirmAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="confirm/:id" element={<ConfirmAccount />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
