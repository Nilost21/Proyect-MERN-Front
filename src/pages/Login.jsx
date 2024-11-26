import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl ">
          Start session and manage your{' '}
          <span className="text-gray-600">Patients</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Registration Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <input
            type="submit"
            value="Start Session"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between  ">
          <Link
            to="/register"
            className="block text-center my-5 text-gray-500 font-bold"
          >
            ¿Don&apos;t have an account? Register
          </Link>
          <Link
            to="/forget-password"
            className="block text-center my-5 text-gray-500 font-bold"
          >
            Forget Password{' '}
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Login;
