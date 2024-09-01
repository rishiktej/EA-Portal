import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <img src="SEAM.png" alt="berry" className="h-12 sm:h-14 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-600">
            Login
          </h2>
          {/*<p className="text-gray-600 text-sm">Use default credentials: <strong>test@appseed.us</strong> / <strong>pass</strong></p>*/}
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your E-mail"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12h.01M12 15h.01M9 12h.01M12 9h.01M17 16v1M17 16v1a2 2 0 01-2 2h-6a2 2 0 01-2-2v-1M15 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Sign IN
          </button>
          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="/register" className="text-purple-600 hover:underline">
              Create Account
            </a>
            <a href="#" className="text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="mt-6 text-center text-gray-500 text-sm">
          Student Event Attendance Management{" "}
          <a
            href="#"
            className="text-purple-600 underline hover:text-indigo-500"
          >
            know More
          </a>
        </div>
      </div>
      {/* <button className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11h2M5 11H3M8 7H5M8 17h6"></path>
        </svg>
      </button> */}
    </div>
  );
};

export default Login;
