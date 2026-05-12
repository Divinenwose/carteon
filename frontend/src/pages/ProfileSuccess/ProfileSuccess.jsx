import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "../../assets/confetti.png";
import direct from "../../assets/direct.png";
import download from "../../assets/download.png";
import copy from "../../assets/copy.png";
import Footer from "../../components/Footer/Footer.jsx";

const ProfileLive = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleReturnHome = () => {
        navigate("/");
    };

    const handleNextCardSetup = () => {
        const reference = localStorage.getItem("reference");
        const quantity = localStorage.getItem("quantity");

        navigate("/card-setup", {
            state: { reference, quantity }
        });
    };

    return (
        <section>
            <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-start px-4 py-30">

                <div className="text-5xl mb-4">
                    <img src={confetti} alt="" />
                </div>

                <h1 className="text-[28px] md:text-[32px] font-semibold text-center text-gray-900">
                    Your Carteon Profile <br /> Is Live.
                </h1>

                <p className="text-gray-500 text-sm text-center mt-3 max-w-md">
                    Your digital identity is ready to share. When your card arrives, it will automatically link to this profile.
                </p>

                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-8 w-full max-w-xl p-5">

                    <p className="text-xs text-gray-400 text-center mb-2">
                        Your Profile URL
                    </p>

                    <div className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 truncate text-center">
                        https://812c1555-67aa-48b7-aac5-7e196f72124e-v2-figmaiframepreview.figma.site/profile/lyvmlk6ve
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 mt-4">

                        <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-50 w-full">
                            <img src={direct} alt="redirect-icon" />
                            View Profile
                        </button>

                        <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-50 w-full">
                            <img src={copy} alt="copy-icon" />
                            Copy Link
                        </button>

                        <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-50 w-full">
                            <img src={download} alt="download-icon" />
                            Download QR
                        </button>
                    </div>
                </div>

                {/* Secure Link */}
                <div className="bg-[#EEF4FF] border border-[#D6E4FF] text-center rounded-md mt-6 w-full max-w-xl p-4">
                    <p className="text-sm font-medium text-gray-700">
                        Secure Edit Link Sent
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        A secure edit link has been sent to your email. You can update your profile anytime without logging in.
                    </p>
                </div>

                <p className="text-xs text-gray-400 mt-6 text-center">
                    3-7 working days outside Lagos, then 7-21 working days outside Nigeria
                </p>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col md:flex-row gap-3 mt-4 w-full max-w-xl">

                    <button
                        onClick={handleReturnHome}
                        className="border border-gray-300 rounded-md px-6 py-2 text-sm hover:bg-gray-50 w-full"
                    >
                        Return to Homepage
                    </button>

                    <button
                        onClick={handleNextCardSetup}
                        className="bg-[#0F1419] text-white rounded-md px-6 py-2 text-sm hover:opacity-90 w-full"
                    >
                        Setup Next Card
                    </button>

                </div>

            </div>

            <Footer />
        </section>
    );
};

export default ProfileLive;