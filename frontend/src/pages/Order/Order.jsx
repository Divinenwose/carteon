import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer/Footer.jsx";
import { toast } from "react-toastify";

const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedCard = location.state?.variant;
    const quantity = location.state?.quantity || 1;
    const cardType = location.state?.cardType;
    const price = selectedCard?.basePrice || selectedCard?.price || 50000;



    useEffect(() => {
        const token =
            localStorage.getItem("token") ||
            sessionStorage.getItem("token");

        if (!token) {

            // save checkout data before redirecting
            localStorage.setItem(
                "pendingCheckout",
                JSON.stringify({
                    variant: selectedCard,
                    quantity,
                    cardType,
                    colorVariant: location.state?.colorVariant,
                })
            );

            return;
        }

        if (!selectedCard) {
            navigate("/");
        }
    }, [selectedCard, navigate, quantity, cardType, location.state]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);

    // Build product summary
    const product = {
        name: selectedCard?.variantName || "Metal Smart Card",
        variant: selectedCard?.variantName || "Default",
        quantity: quantity,
        price: price,
        cardType: cardType,
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePayment = async () => {
        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill all required fields");
            return;
        }

        try {
            setLoading(true);

            const totalAmount =
                Number(product.price) * Number(product.quantity);

            const payload = {
                customerData: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                },
                items: [
                    {
                        cardType,
                        quantity: Number(quantity),
                        colorVariant: location.state?.colorVariant ?? "black",
                    },
                ],
                totalAmount: Number(product.price) * Number(product.quantity)
            };

            console.log("SELECTED CARD:", selectedCard);

            console.log("PAYLOAD:", {
                customerData: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                },
                items: [
                    {
                        cardType,
                        quantity: Number(quantity),
                        colorVariant: location.state?.colorVariant ?? "black",
                    },
                ],
                totalAmount: Number(product.price) * Number(product.quantity)
            });

            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}api/v1/orders/`,
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const responseData = res.data?.data || res.data;

            console.log("🔍 FULL RESPONSE:", responseData);

            const paymentUrl =
                responseData.authorizationUrl || responseData.paymentUrl;

            if (!paymentUrl) {
                alert("Payment session failed");
                return;
            }

            window.location.href = paymentUrl;
            const reference = responseData.reference;

            // store reference for success page
            localStorage.setItem("paymentRef", reference);

            // redirect to Paystack
            window.location.href = paymentUrl;

        } catch (error) {
            console.log("FULL ERROR:", error);

            if (error.response) {
                console.log("ERROR RESPONSE:", error.response.data);
                console.log("STATUS:", error.response.status);
            }

            alert(
                error.response?.data?.message ||
                "Order initialization failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full h-auto bg-white">
            <div className="px-4 pt-26 sm:px-10 md:px-25 pt-10 sm:pt-20 md:pt-30">
                <h2 className="font-Inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[120%] text-black mb-6 sm:mb-8 md:mb-10">
                    Checkout
                </h2>
            </div>
            <div className="max-w-6xl pb-10 sm:pb-16 md:pb-20 mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 md:gap-10">
                {/* Contact Form */}
                <div>
                    <h2 className="font-Inter font-medium text-[20px] sm:text-[22px] md:text-[24px] leading-[120%] text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6">
                        Contact Information
                    </h2>
                    <div className="space-y-4 sm:space-y-5">
                        {["name", "email", "phone"].map((field) => (
                            <div key={field} className="flex flex-col gap-2 sm:gap-3">
                                <label className="font-Inter font-normal text-[14px] sm:text-[15px] leading-[120%] text-[#1A1A1A]">
                                    {field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ")}
                                </label>
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    placeholder={field === "zip" ? "10001" : `Enter your ${field}`}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full h-[45px] sm:h-[50px] px-3 sm:px-4 rounded-lg bg-gray-100 outline-none"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-white h-auto p-4 sm:p-6 md:p-6 rounded-xl shadow">
                    <h3 className="font-Inter font-semibold text-[14px] sm:text-[15.3px] leading-[28px] text-[#0A0A0A] mb-3 sm:mb-4">
                        Order Summary
                    </h3>

                    <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex justify-between">
                            <span className="font-Inter text-[13px] sm:text-[14px] leading-[20px] text-[#737373]">Product</span>
                            <span className="font-Inter font-medium text-[13px] sm:text-[14px] leading-[20px] text-[#0A0A0A]">{product.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-Inter text-[13px] sm:text-[14px] leading-[20px] text-[#737373]">Variant</span>
                            <span className="font-Inter font-medium text-[13px] sm:text-[14px] leading-[20px] text-[#0A0A0A]">{product.variant}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-Inter text-[13px] sm:text-[14px] leading-[20px] text-[#737373]">Quantity</span>
                            <span className="font-Inter font-medium text-[13px] sm:text-[14px] leading-[20px] text-[#0A0A0A]">{product.quantity}</span>
                        </div>
                    </div>

                    <div className="w-full flex justify-between border-t border-[#99A1AF6E] pt-5 pb-5 mt-6">
                        <span className="font-Inter text-[13px] sm:text-[14px] leading-[20px] text-[#737373]">Subtotal</span>
                        <span className="font-Inter font-medium text-[13px] sm:text-[14px] leading-[20px] text-[#0A0A0A]">
                            ₦{product.price.toLocaleString()}
                        </span>
                    </div>

                    <div className="w-full flex justify-between border-t border-[#99A1AF6E] pt-5 pb-5 mt-2">
                        <span className="font-Inter text-[13px] sm:text-[14px] leading-[20px] text-[#737373]">Total</span>
                        <span className="font-Inter font-bold text-[18px] sm:text-[20px] leading-[32px] text-[#0A0A0A]">
                            ₦{(product.price * product.quantity).toLocaleString()}
                        </span>
                    </div>

                    <button
                        onClick={handlePayment}
                        disabled={loading}
                        className="mt-6 sm:mt-8 md:mt-10 w-full h-[48px] sm:h-[52px] cursor-pointer bg-[#0A0A0A] rounded-[12px] font-Inter font-semibold text-[12px] sm:text-[11.9px] leading-[20px] text-white"
                    >
                        {loading ? "Processing..." : "Complete Secure Payment"}
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Checkout;
