import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
        remember: false
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            toast.error("Please fill in all fields");
            return;
        }

        setLoading(true);

        try {
            const loginUrl = `${import.meta.env.VITE_BACKEND_URL}api/v1/auth/login`;

            const payload = {
                email: form.email.trim(),
                password: form.password
            };

            console.log("LOGIN URL:", loginUrl);
            console.log("PAYLOAD:", payload);

            const response = await axios.post(
                loginUrl,
                payload,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log(
                "FULL LOGIN RESPONSE:",
                JSON.stringify(response.data, null, 2)
            );

            // UPDATED TOKEN HANDLING
            const token = response.data?.data?.token;
            const user = response.data?.data?.user;

            if (token) {

                if (form.remember) {

                    localStorage.setItem("token", token);

                    if (user) {
                        localStorage.setItem(
                            "user",
                            JSON.stringify(user)
                        );
                    }

                } else {

                    sessionStorage.setItem("token", token);

                    if (user) {
                        sessionStorage.setItem(
                            "user",
                            JSON.stringify(user)
                        );
                    }
                }

                toast.success("Login successful");

                setTimeout(() => {
                    navigate("/profiledetails");
                }, 1500);

            } else {

                console.log("BACKEND RESPONSE:", response.data);

                toast.error("Login successful but token was not returned.");
            }

        } catch (error) {
            console.error("LOGIN ERROR:", error);

            if (error.response) {
                console.log("ERROR RESPONSE:", error.response.data);
                console.log("STATUS:", error.response.status);
            }

            if (error.response?.status === 401) {

                toast.error("Invalid email or password");

            } else if (error.response?.status === 403) {

                const message =
                    error.response?.data?.message ||
                    "Please kindly sign up and verify your email before logging in.";

                toast.error(message);

                navigate("/signup", {
                    state: {
                        email: form.email
                    }
                });

            } else if (error.response?.status === 429) {

                toast.error("Too many attempts. Please try again later.");

            } else if (error.response?.status === 500) {

                toast.error("Server error. Please try again.");

            } else {

                const message =
                    error.response?.data?.message ||
                    "Login failed. Please try again.";

                toast.error(message);
            }

        } finally {
            setLoading(false);
        }
    };

    const isValid = form.email && form.password;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#252C46] via-[#3B4266] to-[#1E2338]">
            <div className="bg-white w-full max-w-[560px] mx-4 sm:mx-6 p-4 sm:p-6 rounded-xl shadow-xl border border-gray-200">
                <h2 className="font-Inter font-bold text-[20px] sm:text-[22px] md:text-[25.5px] leading-[30px] sm:leading-[33px] md:leading-[36px] text-[#0F172A] align-middle">
                    Welcome back
                </h2>

                <p className="font-Inter font-normal text-[12px] sm:text-[13px] md:text-[13.6px] leading-[20px] sm:leading-[22px] md:leading-[24px] text-[#475569] align-middle mt-3">
                    Log in to continue to your dashboard.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="font-Inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[20px] text-[#1A1A1A] align-middle"
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Name@gmail.com"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full h-[40px] sm:h-[42px] md:h-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[8px] sm:p-[9px] md:p-[10px] focus:outline-none focus:ring-2 focus:ring-[#252C46] text-[14px] sm:text-[15px]"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="font-Inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[20px] text-[#1A1A1A] align-middle block mb-2"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full h-[40px] sm:h-[42px] md:h-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[8px] sm:p-[9px] md:p-[10px] focus:outline-none focus:ring-2 focus:ring-[#252C46] text-[14px] sm:text-[15px]"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={form.remember}
                                onChange={handleChange}
                                className="accent-[#252C46]"
                            />
                            Remember me
                        </label>
                    </div>

                    <button
                        disabled={!isValid || loading}
                        className={`w-full py-3 rounded-md text-white transition cursor-pointer
                        ${!isValid || loading
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#252C46]"
                            }`}
                    >
                        {loading ? "Logging in..." : "Log in"}
                    </button>
                </form>

                <div className="flex items-center my-5">
                    <div className="flex-grow h-px bg-gray-300"></div>

                    <span className="px-3 text-xs text-gray-500">
                        Or continue with
                    </span>

                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">

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
                    <p className="font-outfit font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[100%] text-[#505256] text-center">
                        New to Carteon?{" "}
                        <Link
                            to="/signup"
                            className="font-outfit underline font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[100%] text-[#252C46]"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;