import { useForm } from "react-hook-form"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm text-[#5D9AE5]">First Name</label>
          <input type="text" placeholder="John" {...register("name", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.name && <span className="text-red-500">This field is required</span>}
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
          <input type="password" placeholder="Enter your password" {...register("password", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.password && <span className="text-red-500">This field is required</span>}
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

      </form>
    </div>
  );
};

export default SignUp;