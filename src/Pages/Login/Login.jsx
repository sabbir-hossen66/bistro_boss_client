import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import { AuthContext } from '@/Provider/AuthProvider';
import Swal from 'sweetalert2'

const Login = () => {
  const [disabled, setDisabled] = useState(true)
  const { signIn } = useContext(AuthContext)
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user
        console.log(user);
        navigate(from, { replace: true });
        Swal.fire({
          title: "Custom animation with Animate.css",
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
          }
        });
      })
  }

  const handleValidateCaptcha = (e) => {
    const result = e.target.value;
    if (validateCaptcha(result)) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }

  return (
    <div>

      <form onSubmit={handleLogin} className="w-full max-w-md mx-auto">
        <h1 className="mt-3 text-2xl font-semibold text-[#3B82F6] capitalize sm:text-3xl ">
          sign In</h1>

        <div className="relative flex items-center mt-8">
          <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>

          <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" required />

        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>

          <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" required />
        </div>
        {/* captcha */}
        <div>
          <label className='label'>
            <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="captcha" name="captcha" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="type captcha" required />
          {/* <button className="w-full btn btn-xs btn-outline btn-success">validate</button> */}
        </div>

        <div className="mt-6">
          <div>
            <button disabled={disabled} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign in
            </button>
          </div>

          {/* {
            disabled ? <div>
              <button>Please type captcha</button>
            </div>
              :
              <div>
                <button disabled={disabled} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign in
                </button>
              </div>
          } */}

          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>



          <div className="flex flex-col w-full px-6 py-3 gap-y-5">
            <button className="googleSign bg-white flex items-center text-white  font-bold justify-center gap-x-3 text-sm sm:text-base  dark:border-gray-700 hover:bg-blue-500 rounded-lg  duration-300 transition-colors border px-8 py-2.5">
              <svg className="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3033_94454)">
                  <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                  <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                  <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04" />
                  <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_3033_94454">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>Sign in with Google</span>
            </button>
          </div>
          <div className="mt-6 text-center ">
            <Link>
              <button className="text-sm text-blue-500 dark:text-blue-400">
                Don’t have an account yet?<span href="#" className="hover:underline"> <Link to={'/signup'}>Sign up</Link></span>
              </button>
            </Link>
          </div>
        </div>

      </form>


    </div>
  );
};

export default Login;
