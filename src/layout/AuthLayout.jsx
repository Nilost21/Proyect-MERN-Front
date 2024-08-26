import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <h1 className="font-bold text-4xl">From Nav Layout</h1>
      <Outlet />
      <h1 className="font-bold text-4xl">From Footer Layout</h1>
    </>
  );
};
export default AuthLayout;
