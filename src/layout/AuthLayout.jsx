import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <min className="container mx-auto md:grid md:grid-cols-2 mt-12">
        <Outlet />
      </min>
    </>
  );
};
export default AuthLayout;
