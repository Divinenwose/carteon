import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";

const VerifyOtp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // get email from signup page
    const email = location.state?.email || "example@gmail.com";

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputs = useRef([]);

    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // move to next input
        if (value && index < 5) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // move backward on backspace
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleSubmit = async () => {
        const code = otp.join("");

        if (code.length !== 6) {
            alert("Please enter the complete OTP");
            return;
        }

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}api/v1/auth/verify-otp`,
                {
                    email,
                    otp: code
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log("VERIFY RESPONSE:", response.data);

            alert("Email verified successfully");

            // redirect to login
            navigate("/login");

        } catch (error) {
            console.error("VERIFY ERROR:", error);

            const message =
                error.response?.data?.message ||
                "OTP verification failed";

            alert(message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#252C46] px-3 sm:px-4">
            <div className="bg-white w-full max-w-[420px] p-5 sm:p-6 rounded-xl shadow-md">

                {/* Back */}
                <button
                    onClick={() => navigate("/signup")}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-5 sm:mb-6 cursor-pointer"
                >
                    <ArrowLeft size={18} />
                    Back to account
                </button>

                {/* Heading */}
                <h2 className="text-[22px] sm:text-[28px] font-semibold text-center mb-2">
                    Verify your email
                </h2>

                <p className="text-gray-500 text-center mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    We sent a verification code to{" "}
                    <span className="font-medium text-black">{email}</span>. <br />
                    Enter the code below to activate your account.
                </p>

                {/* OTP Inputs */}
                <div className="flex justify-between gap-2 sm:gap-2 mb-5 sm:mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            ref={(el) => (inputs.current[index] = el)}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-10 h-12 sm:w-14 sm:h-14 border border-gray-300 rounded-md text-center text-lg sm:text-xl outline-none focus:border-[#252C46]"
                        />
                    ))}
                </div>

                {/* Verify Button */}
                <button
                    onClick={handleSubmit}
                    disabled={otp.join("").length !== 6}
                    className={`w-full py-3 rounded-md text-white font-medium transition text-sm sm:text-base ${otp.join("").length === 6
                            ? "bg-[#252C46] hover:opacity-90 cursor-pointer"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                >
                    Verify Email
                </button>

                {/* Resend */}
                <button className="w-full mt-3 text-sm text-gray-500 hover:text-black transition cursor-pointer">
                    Resend verification email
                </button>

                {/* Change Email */}
                <p
                    onClick={() => navigate("/signup")}
                    className="text-sm mt-4 text-center text-gray-500 hover:text-black cursor-pointer"
                >
                    Wrong email? <span className="font-medium">Change it</span>
                </p>
            </div>
        </div>
    );
};

export default VerifyOtp;