import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import confetti from "../../assets/confetti.png";
import Footer from "../../components/Footer/Footer.jsx";

const Success = () => {
    const query = new URLSearchParams(useLocation().search);
    const reference = query.get("reference");
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [status, setStatus] = useState("loading");
    const [completedCards, setCompletedCards] = useState([]);

    const quantity = order?.items?.[0]?.quantity || 0;
    const cardType = order?.items?.[0]?.cardType || "Gold";


    const handleSetupClick = (cardIndex) => {
        navigate("/profiledetails", {
            state: { cardIndex }
        });
    };

    useEffect(() => {
        const verifyPayment = async (attempts = 0) => {
            try {
                if (attempts > 5) {
                    setStatus("error");
                    return;
                }
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}api/v1/orders/verify?reference=${reference}`
                );

                const fetchedOrder = res.data.data;
                setOrder(fetchedOrder);

                if (fetchedOrder.paymentStatus === "SUCCESS") {
                    setStatus("success");
                } else if (fetchedOrder.paymentStatus === "PENDING") {
                    // Poll again after 2 seconds
                    setTimeout(() => verifyPayment(attempts + 1), 2000);
                } else {
                    setStatus("error");
                }
            } catch (err) {
                console.error(err);
                setStatus("error");
            }
        };

        if (reference) {
            verifyPayment();
        } else {
            setStatus("error");
        }
    }, [reference]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("completedCards")) || [];
        setCompletedCards(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("completedCards", JSON.stringify(completedCards));
    }, [completedCards]);



    if (status === "loading") {
        return (
            <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
                <h1 className="font-Inter font-semibold text-[24px]">Verifying your payment...</h1>
                <p className="mt-2 text-[#64748B]">Please wait while we confirm your transaction.</p>
                <div className="mt-6 animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mx-auto"></div>
            </section>
        );
    }

    if (status === "error") {
        return (
            <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
                <h1 className="font-Inter font-semibold text-[24px] text-red-600">Payment Verification Failed</h1>
                <p className="mt-2 text-[#64748B] max-w-md">
                    We could not verify your payment at this time, or the transaction was cancelled. If you have been debited, please contact support.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-6 px-6 py-3 bg-[#0F1419] text-white rounded-md font-Inter font-medium"
                >
                    Return Home
                </button>
            </section>
        );
    }

    return (
        <section>
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 mt-10">

                <div>
                    <img src={confetti} alt="Confetti" className="mx-auto w-24 md:w-auto" />

                    <h1 className="font-Inter font-semibold text-[28px] md:text-[40px] leading-[40px] md:leading-[61.6px] tracking-[-1.12px] text-[#0F1419] text-center">
                        Payment Confirmed.
                    </h1>
                </div>

                <p className="font-Inter font-normal w-full max-w-[556px] text-[16px] md:text-[20px] leading-[24px] md:leading-[29.25px] tracking-[-0.16px] text-[#64748B] text-center">
                    Your Carteon card is being crafted. Let's set up your digital identity while we prepare your shipment.
                </p>

                <div className="w-full max-w-[576px] h-auto mt-[20px] bg-[#F5F5F5] p-[15px] flex flex-col gap-3 rounded-md">

                    <div className="flex items-center justify-between">
                        <p className="font-Inter font-normal text-[12px] md:text-[14px] leading-[20px] tracking-[-0.16px] text-[#525252]">
                            Order Confirmation
                        </p>
                        <p className="font-Inter font-semibold text-[16px] md:text-[18px] leading-[28px] tracking-[-0.16px] text-[#1A1A1A]">
                            {reference}
                        </p>
                    </div>


                    <div className="flex items-center justify-between">
                        <p className="font-Inter font-normal text-[12px] md:text-[14px] leading-[20px] tracking-[-0.16px] text-[#525252]">
                            Cards Ordered
                        </p>
                        <p className="font-Inter font-semibold text-[16px] md:text-[18px] leading-[28px] tracking-[-0.16px] text-[#1A1A1A]">
                            {order?.items?.[0]?.quantity || 0}
                        </p>
                    </div>
                </div>

                <p className="font-Inter mt-4 font-normal text-[12px] md:text-[14px] leading-[100%] text-[#525252] text-center">
                    3-7 working days within Lagos, then 7-21 working days outside Nigeria
                </p>

                {quantity === 1 ? (
                    <button
                        onClick={() => navigate("/profiledetails")}
                        className="w-full max-w-[576px] h-[56px] bg-[#0F1419] mt-8 rounded-[8px] text-white"
                    >
                        Set Up My Profile
                    </button>
                ) : (
                    <button
                        onClick={() =>
                            navigate("/card-setup", {
                                state: {
                                    quantity,
                                    cardType,
                                    reference
                                }
                            })
                        }
                        className="w-full max-w-[576px] h-[56px] bg-[#0F1419] mt-8 rounded-[8px] text-white"
                    >
                        Set Up My Cards
                    </button>
                )}
            </div>

            <Footer />
        </section>
    );
};

export default Success;