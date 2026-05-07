import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [socialLoading, setSocialLoading] = useState({
        google: false,
        apple: false,
    });

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.agree) {
            toast.error(
                "Please agree to the Terms of Service and Privacy Policy"
            );
            return;
        }

        if (!form.name || !form.email || !form.password) {
            toast.error("Please fill in all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        if (form.password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        setLoading(true);

        try {
            const payload = {
                fullName: form.name,
                email: form.email,
                password: form.password,
            };

            console.log("Sending registration payload:", payload);

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}api/v1/auth/register`,
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Registration response:", response.data);

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
            }

            if (response.data.user) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
            }

            toast.success(
                "Registration successful! Verify your OTP."
            );

            navigate("/verify-otp", {
                state: {
                    email: form.email,
                },
            });
        } catch (error) {
            console.error("Registration failed:", error);

            let errorMessage =
                "Registration failed. Please try again.";

            if (error.response) {
                const errorData = error.response.data;

                if (error.response.status === 400) {
                    if (
                        errorData?.message
                            ?.toLowerCase()
                            .includes("email already")
                    ) {
                        errorMessage =
                            "This email is already registered.";
                    } else {
                        errorMessage =
                            errorData?.message || errorMessage;
                    }
                } else if (error.response.status === 500) {
                    errorMessage =
                        "Server error. Please try again later.";
                } else if (error.response.status === 429) {
                    errorMessage =
                        "Too many attempts. Please wait and try again.";
                } else {
                    errorMessage =
                        errorData?.message || errorMessage;
                }
            } else if (error.request) {
                errorMessage =
                    "Network error. Please check your internet connection.";
            } else {
                errorMessage = error.message;
            }

            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = async (provider) => {
        setSocialLoading((prev) => ({
            ...prev,
            [provider]: true,
        }));

        try {
            if (provider === "google") {
                toast.info(
                    "Google Sign-In integration coming soon."
                );
            }

            if (provider === "apple") {
                toast.info(
                    "Apple Sign-In integration coming soon."
                );
            }
        } catch (error) {
            console.error(`${provider} login failed:`, error);

            toast.error(
                `An error occurred with ${provider} login`
            );
        } finally {
            setSocialLoading((prev) => ({
                ...prev,
                [provider]: false,
            }));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#252C46] via-[#3B4266] to-[#1E2338] px-4">
            <div className="bg-white w-full max-w-[560px] my-[10px] p-6 rounded-xl shadow-xl border border-gray-200">
                <div className="flex flex-col gap-4">
                    <h2 className="font-Inter font-bold text-[25.5px] leading-[36px] text-[#0F172A]">
                        Create your account
                    </h2>

                    <div className="flex flex-col">
                        <h4 className="font-Inter font-medium text-[20px] leading-[20px] text-black">
                            Join Carteon
                        </h4>

                        <p className="font-Inter font-medium text-[14px] leading-[20px] text-black">
                            Start your free account — no credit
                            card required.
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-3 mt-5"
                >
                    {/* FULL NAME */}
                    <div className="flex flex-col gap-2">
                        <label className="font-Inter font-medium text-[16px] leading-[20px] text-[#1A1A1A]">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            placeholder="e.g. Jane Doe"
                            onChange={handleChange}
                            className="w-full h-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[10px] outline-none"
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-2">
                        <label className="font-Inter font-medium text-[16px] leading-[20px] text-[#1A1A1A]">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="name@gmail.com"
                            onChange={handleChange}
                            className="w-full h-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[10px] outline-none"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="flex flex-col gap-2">
                        <label className="font-Inter font-medium text-[16px] leading-[20px] text-[#1A1A1A]">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className="w-full h-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[10px] outline-none"
                        />
                    </div>

                    {/* TERMS */}
                    <label className="flex items-start gap-2 text-sm">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={handleChange}
                            className="mt-1"
                        />

                        <span>
                            I agree to Carteon’s{" "}
                            <a
                                href="/terms-conditions"
                                className="text-[#252C46] underline font-medium"
                            >
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                                href="/privacy-policy"
                                className="text-[#252C46] underline font-medium"
                            >
                                Privacy Policy
                            </a>
                        </span>
                    </label>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        disabled={!form.agree || loading}
                        className={`w-full py-3 rounded-md text-white font-medium transition-all duration-300 ${form.agree && !loading
                                ? "bg-[#252C46] hover:bg-[#1E2338]"
                                : "bg-gray-300 cursor-not-allowed"
                            }`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-4 w-4"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />

                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 
                                        0 0 5.373 0 12h4zm2 5.291A7.962 
                                        7.962 0 014 12H0c0 3.042 1.135 
                                        5.824 3 7.938l3-2.647z"
                                    />
                                </svg>

                                Creating account...
                            </span>
                        ) : (
                            "Create my account"
                        )}
                    </button>
                </form>

                {/* DIVIDER */}
                <div className="flex items-center my-5">
                    <div className="flex-grow h-px bg-gray-300"></div>

                    <span className="px-3 text-xs text-gray-500">
                        Or continue with
                    </span>

                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* SOCIAL BUTTONS */}
                <div className="flex gap-3">
                    {/* GOOGLE */}
                    <button
                        type="button"
                        onClick={() =>
                            handleSocialLogin("google")
                        }
                        disabled={socialLoading.google}
                        className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2.5 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google"
                            className="w-5 h-5"
                        />

                        <span className="text-sm font-medium text-gray-700">
                            {socialLoading.google
                                ? "Connecting..."
                                : "Sign in with Google"}
                        </span>
                    </button>

                    {/* APPLE */}
                    <button
                        type="button"
                        onClick={() =>
                            handleSocialLogin("apple")
                        }
                        disabled={socialLoading.apple}
                        className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2.5 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                        <svg
                            className="w-5 h-5 text-black"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M16.365 1.43c0 1.14-.465 2.21-1.22 2.96-.81.82-2.13 1.45-3.28 1.36-.14-1.1.45-2.27 1.2-3.05.84-.85 2.27-1.46 3.3-1.27zM20.92 17.05c-.58 1.35-.86 1.95-1.6 3.13-1.03 1.65-2.49 3.7-4.29 3.72-1.6.02-2.01-1.04-4.18-1.03-2.18.01-2.63 1.05-4.23 1.01-1.8-.03-3.19-1.87-4.22-3.52-2.89-4.55-3.2-9.9-1.41-12.67 1.27-1.96 3.27-3.11 5.14-3.11 1.96 0 3.19 1.07 4.8 1.07 1.56 0 2.52-1.08 4.78-1.08 1.66 0 3.42.91 4.69 2.48-4.13 2.27-3.46 8.23.52 9.99z" />
                        </svg>

                        <span className="text-sm font-medium text-gray-700">
                            {socialLoading.apple
                                ? "Connecting..."
                                : "Sign in with Apple"}
                        </span>
                    </button>
                </div>

                {/* LOGIN */}
                <div className="text-center mt-4">
                    <p className="font-outfit font-normal text-[18px] text-[#505256]">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="underline text-[#252C46]"
                        >
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;