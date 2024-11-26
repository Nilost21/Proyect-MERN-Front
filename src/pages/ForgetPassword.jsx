import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <>
      <div className="md:px-10">
        <h1 className="text-indigo-600 font-black text-6xl ">
          Recover your access and do not lose{' '}
          <span className="text-gray-600">your Patients</span>
        </h1>
      </div>
      <div>
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
            <input
              type="submit"
              value="Send instructions"
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
              to="/"
              className="block text-center my-5 text-gray-500 font-bold"
            >
              Back to top{' '}
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
