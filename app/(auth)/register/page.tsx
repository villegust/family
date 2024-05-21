import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <section>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="/images/login.jpg"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Register</h1>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default Register;

{
  /* <div className="flex justify-between gap-3 mb-4">
              <div className="flex flex-col w-1/2 text-gray-600">
                <label htmlFor="fistName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex flex-col w-1/2 text-gray-600">
                <label htmlFor="lastName" className="block text-gray-600">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div> */
}
