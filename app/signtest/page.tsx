import React from 'react';

const LoginForm = () => {
  return (
    <div className="z-50 w-full max-w-560 flex flex-col justify-center items-start pl-8 pr-8 relative overflow-visible text-left bg-none rounded-lg p-8 box-border">
      <h1 className="w-full text-center text-white text-2xl font-bold mb-0">Welcome back, <span className="bg-purple-600 text-black bg-clip-text">Buddy!</span></h1>
      <div className="w-full mt-4">
        <form
          name="wf-form-signup"
          data-name="signup"
          method="get"
          data-ms-form="login"
          data-wf-page-id="65318d8b96ecce0247d1b8c6"
          data-wf-element-id="83ef403b-4d6a-63c3-703a-c70fb37dbc9a"
          aria-label="signup"
          className="w-full gap-y-4 text-left flex flex-col justify-between mb-4 pt-2"
        >
          <div className="w-full flex justify-between items-center"></div>
          <div className="w-full flex flex-col justify-start items-start mb-0">
            <label
              htmlFor="Email-2"
              className="z-2 text-gray-700 border rounded-md mb-1 pl-1 pr-2 text-sm font-semibold leading-4 block relative bottom-0 left-0"
            >
              Email
            </label>
            <input
              type="email"
              name="Email-2"
              data-name="Email 2"
              placeholder="youremail@example.com"
              data-ms-member="email"
              className="h-12 text-white bg-opacity-03 border-none rounded-md mb-0 pt-3 pl-4 text-base font-light transition duration-200 ease-in-out shadow-sm w-full focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start mb-0">
            <label
              htmlFor="Password-2"
              className="z-2 text-gray-700 border rounded-md mb-1 pl-1 pr-2 text-sm font-semibold leading-4 block relative bottom-0 left-0"
            >
              Password
            </label>
            <input
              type="password"
              data-show="true"
              name="Password-2"
              data-name="Password 2"
              placeholder=""
              data-ms-member="password"
              required=""
              className="h-12 text-white bg-opacity-03 border-none rounded-md mb-0 pt-3 pl-4 text-base font-light transition duration-200 ease-in-out shadow-sm w-full focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
            <div className="w-full h-3"></div>
            <div className="w-full flex justify-end mt-1"></div>
            <div className="bg-purple-600 text-black bg-clip-text font-bold">
              <a
                href="/password/forgot"
                className="underline transition duration-200 ease-in-out"
              >
                Forgot your password?
              </a>
              <a
                href="#"
                className="text-purple-500 font-semibold text-decoration-none transition duration-200 ease-in-out"
              ></a>
            </div>
            <div className="h-8"></div>
          </div>
          <a
            href="#"
            className="text-black bg-white bg-none w-full gap-x-2 border rounded-md justify-center items-center pl-6 pr-6 text-base font-semibold text-decoration-none transition duration-200 ease-in-out flex relative shadow-inset h-16 box-border"
          >
            Log In
          </a>
          <div className="w-full max-w-600 text-center flex flex-col items-center">
            <div className="w-full border-t border-gray-400 mb-2 block"></div>
            <div className="w-full gap-x-3 text-center justify-center items-center pt-6 font-semibold flex">
              or log in with:
              <a
                href="/login"
                aria-current="page"
                className="bg-purple-600 text-black bg-clip-text transition duration-200 ease-in-out"
              ></a>
            </div>
            <div className="w-full gap-10 items-center mt-2 pl-0 pr-0 flex">
              <a
                data-ms-auth-provider="google"
                href="#"
                className="w-1/3 h-12 bg-black border-2 border-gray-700 rounded-md justify-center items-center transition duration-200 ease-in-out underline max-w-full"
              >
                <div className="text-blue-500 w-6 h-6 justify-center items-center flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                data-ms-auth-provider="dribbble"
                href="#"
                className="w-1/3 h-12 bg-black border-2 border-gray-700 rounded-md justify-center items-center transition duration-200 ease-in-out underline max-w-full"
              >
                <div className="text-indigo-500 w-6 h-6 justify-center items-center flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <circle cx="24" cy="24" r="19.375" fill="#ed3675"></circle>
                    <path
                      fill="#bd1949"
                      fill-rule="evenodd"
                      d="M24,4C12.959,4,4,12.959,4,24c0,11.041,8.959,20,20,20	c11.02,0,20-8.959,20-20C44,12.959,35.02,4,24,4z M37.21,13.219c2.386,2.907,3.818,6.616,3.861,10.629	c-0.564-0.108-6.204-1.258-11.887-0.542c-0.13-0.282-0.239-0.586-0.369-0.889c-0.347-0.824-0.738-1.67-1.128-2.473	C33.978,17.384,36.842,13.696,37.21,13.219z M24,6.95c4.338,0,8.308,1.627,11.323,4.295c-0.304,0.434-2.885,3.883-8.959,6.16	c-2.798-5.141-5.9-9.349-6.377-10C21.267,7.102,22.612,6.95,24,6.95z M16.733,8.555c0.455,0.607,3.492,4.837,6.334,9.87	c-7.983,2.126-15.033,2.083-15.792,2.083C8.382,15.215,11.961,10.811,16.733,8.555z M6.907,24.022c0-0.174,0-0.347,0-0.521	c0.738,0.022,9.024,0.13,17.549-2.43c0.499,0.954,0.954,1.931,1.388,2.907c-0.217,0.065-0.456,0.13-0.672,0.195	c-8.807,2.842-13.492,10.607-13.883,11.258C8.577,32.417,6.907,28.403,6.907,24.022z M24,41.093c-3.948,0-7.592-1.345-10.477-3.601	c0.304-0.629,3.774-7.31,13.406-10.672c0.043-0.022,0.065-0.022,0.109-0.043c2.408,6.226,3.384,11.453,3.644,12.95	C28.62,40.616,26.364,41.093,24,41.093z M33.523,38.165c-0.174-1.041-1.085-6.03-3.319-12.169	c5.358-0.846,10.043,0.542,10.629,0.738C40.096,31.484,37.362,35.583,33.523,38.165z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                data-ms-auth-provider="github"
                href="#"
                className="w-1/3 h-12 bg-black border-2 border-gray-700 rounded-md justify-center items-center transition duration-200 ease-in-out underline max-w-full"
              >
                <div className="text-yellow-500 w-6 h-6 justify-center items-center flex">
                </div>

              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

