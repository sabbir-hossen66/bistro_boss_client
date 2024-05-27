import { AuthContext } from "@/Provider/AuthProvider";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const axiosPublic = useAxiosPublic()
  const { createUser, updatePerson, logOut } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()
  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const response = result.user
        console.log(response);
        updatePerson(data.name, data.photoURL)
          .then(() => {
            //  create user entry in database
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added');
                  reset()
                  Swal.fire({
                    title: "Sweet!",
                    text: "Modal with a custom image.",
                    imageUrl: "https://unsplash.it/400/200",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  });
                }
              })

            // navigate('/')
            logOut()
              .then(() => {
                navigate('/')
              })
          })

      })
      .catch(error => {
        const errormessage = error.message
        console.log(errormessage);
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm text-[#5D9AE5]">First Name</label>
          <input type="text" placeholder="John" {...register("name", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.name && <span className="text-red-500">at least 20 character </span>}
        </div>

        <div>
          <label className="block mb-2 text-sm text-[#5D9AE5]">Last name</label>
          <input type="text" placeholder="Snow" {...register("name", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label className="block mb-2 text-sm text-[#5D9AE5]">Email address</label>
          <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>

        <div>
          <label className="block mb-2 text-sm text-[#5D9AE5]">Password</label>
          <input type="password" placeholder="Enter your password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z]).{6,}$/
            })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.password?.type === "required" && (
            <p className="text-red-600">password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">minimum 6 digits</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">One letter is capital</p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm text-[#5D9AE5]">Photo Url</label>
          <input type="photoUrl" placeholder="submit your photoUrl" id='photoURL' {...register("photoURL", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.photoURL && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label className="block mb-2 text-sm text-[#5D9AE5]">Phone number</label>
          <input type="text" placeholder="XXX-XX-XXXX-XXX" {...register("phoneNumber", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
        </div>

        <button
          className=" flex items-center justify-between  font-bold px-10  py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          <span className="mx-auto">Sign Up </span>

          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd" />
          </svg> */}
        </button>
        <p>or</p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default SignUp;