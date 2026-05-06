import { useState } from "react";



const Signup = () => {

    const [form, setForm] = useState({

        name: "",

        email: "",

        password: "",

        agree: false

    });



    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setForm({

            ...form,

            [name]: type === "checkbox" ? checked : value

        });

    };



    const handleSubmit = (e) => {

        e.preventDefault();

        if (!form.agree) return;

        console.log(form);

    };



    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#252C46] via-[#3B4266] to-[#1E2338]">

            <div className="bg-white w-[560px] my-[10px] p-6 rounded-xl shadow-xl border border-gray-200">

                <div className="flex flex-col gap-4">

                    <h2 className="font-Inter font-bold text-[25.5px] leading-[36px] text-[#0F172A] align-middle">Create your account</h2>

                    <div className="flex flex-col">

                        <h4 class="font-Inter font-medium text-[20px] leading-[20px] text-black">Join Carteon</h4>

                        <p class="font-Inter font-medium text-[14px] leading-[20px] text-black">Start your free account — no credit card required.</p>

                    </div>

                </div>

                <form onSubmit={handleSubmit} className="space-y-3 mt-5">

                    <div className="flex flex-col gap-2">

                        <label htmlFor="Full Name" class="font-Inter font-medium text-[16px] leading-[20px] text-[#1A1A1A] align-middle">Full Name</label>

                        <input

                            type="text"

                            name="name"

                            placeholder="e.g. Jane Doe"

                            onChange={handleChange}

                            className="w-full h-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[10px]"

                        />

                    </div>



                    <div className="flex flex-col gap-2">

                        <label htmlFor="Email" class="font-Inter font-medium text-[16px] leading-[20px] text-[#1A1A1A] align-middle">Email</label>

                        <input

                            type="email"

                            name="email"

                            placeholder="Name@gmail.com"

                            onChange={handleChange}

                            className="w-full h-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[10px]"

                        />

                    </div>



                    <div className="flex flex-col gap-2">

                        <label htmlFor="Password" class="font-Inter font-medium text-[16px] leading-[20px] text-[#1A1A1A] align-middle">Password</label>

                        <input

                            type="password"

                            name="password"

                            placeholder="Enter your password"

                            onChange={handleChange}

                            className="w-fullh-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[10px]"

                        />

                    </div>



                    <label className="flex items-start gap-2 text-sm">

                        <input

                            type="checkbox"

                            name="agree"

                            onChange={handleChange}

                            className="mt-1"

                        />

                        <span>

                            I agree to Carteon’s{" "}

                            <a href="/terms-conditions" className="text-[#252C46] underline font-medium cursor-pointer">

                                Terms of Service

                            </a>{" "}

                            and{" "}

                            <a href="/privacy-policy" className="text-[#252C46] underline font-medium cursor-pointer">

                                Privacy Policy

                            </a>

                        </span>

                    </label>



                    <button

                        disabled={!form.agree}

                        className={`w-full py-3 rounded-md text-white ${form.agree

                            ? "bg-[#252C46]"

                            : "bg-gray-300 cursor-not-allowed"

                            }`}

                    >

                        Create my account

                    </button>

                </form>

                <div className="flex items-center my-5">

                    <div className="flex-grow h-px bg-gray-300"></div>

                    <span className="px-3 text-xs text-gray-500">

                        Or continue with

                    </span>

                    <div className="flex-grow h-px bg-gray-300"></div>

                </div>

                <div className="flex gap-3">

                    <button className="flex items-center justify-center cursor-pointer gap-2 w-full border border-gray-300 py-2.5 rounded-md bg-white hover:bg-gray-50">

                        <img

                            src="https://www.svgrepo.com/show/475656/google-color.svg"

                            alt="google"

                            className="w-5 h-5"

                        />

                        <span className="text-sm font-medium text-gray-700">

                            Sign in with Google

                        </span>

                    </button>



                    {/* Apple */}

                    <button className="flex items-center justify-center cursor-pointer gap-2 w-full border border-gray-300 py-2.5 rounded-md bg-white hover:bg-gray-50">

                        <svg

                            className="w-5 h-5 text-black"

                            viewBox="0 0 24 24"

                            fill="currentColor"

                        >

                            <path d="M16.365 1.43c0 1.14-.465 2.21-1.22 2.96-.81.82-2.13 1.45-3.28 1.36-.14-1.1.45-2.27 1.2-3.05.84-.85 2.27-1.46 3.3-1.27zM20.92 17.05c-.58 1.35-.86 1.95-1.6 3.13-1.03 1.65-2.49 3.7-4.29 3.72-1.6.02-2.01-1.04-4.18-1.03-2.18.01-2.63 1.05-4.23 1.01-1.8-.03-3.19-1.87-4.22-3.52-2.89-4.55-3.2-9.9-1.41-12.67 1.27-1.96 3.27-3.11 5.14-3.11 1.96 0 3.19 1.07 4.8 1.07 1.56 0 2.52-1.08 4.78-1.08 1.66 0 3.42.91 4.69 2.48-4.13 2.27-3.46 8.23.52 9.99z" />

                        </svg>

                        <span className="text-sm font-medium text-gray-700">

                            Sign in with Apple

                        </span>

                    </button>

                </div>

                <div className="text-center mt-4">

                    <p class="font-outfit font-normal text-[18px] leading-[100%] text-[#505256] text-center">Already have an account ?  <a href="/login" class="font-outfit underline font-normal text-[18px] leading-[100%] text-[#252C46]">Log in</a></p>

                </div>

            </div>

        </div>

    );

};



export default Signup;