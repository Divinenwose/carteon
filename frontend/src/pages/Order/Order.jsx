import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer/Footer.jsx";

const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedCard = location.state?.variant;
    const quantity = location.state?.quantity || 1;
    const cardType = location.state?.cardType || "DefaultType";
    const price = location.state?.price || selectedCard?.price || 50000;


    useEffect(() => {
        if (!selectedCard) {
            navigate("/");
        }
    }, [selectedCard, navigate]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
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

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.address) {
            alert("Please fill all required fields");
            return;
        }

        try {
            setLoading(true);

            // Map variant to enum
            const cardTypeMapping = {
                "Smart Card": "SMART_ONLY",
                "PVC QR Card": "PVC_QR_ONLY",
                "Complete Package": "COMPLETE_PACKAGE",
            };
            const cardType = cardTypeMapping[selectedCard?.variantName] || "SMART_ONLY";

            const payload = {
                customerData: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                },
                items: [
                    {
                        cardType,
                        quantity: Number(quantity),
                        colorVariant: location.state?.colorVariant || "black",
                    },
                ],
                totalAmount: Number(price * quantity),
            };

            console.log("PAYLOAD:", payload);

            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}api/v1/orders`,
                payload
            );

            // Redirect to success page with order reference
            const paymentData = res.data?.data;
            if (paymentData?.reference) {
                navigate(`/success?reference=${paymentData.reference}`);
            } else {
                alert("Payment initialization failed");
            }

        } catch (error) {
            console.error("Payment error:", error?.response?.data || error.message);
            alert(error?.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full h-auto bg-white">
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column - Product Summary */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-Inter font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-[0%] text-[#1A1A1A]">
                                Order Summary
                            </h2>

                            <div className="bg-[#F8F9FA] rounded-[16px] p-6 border border-[#E5E7EB]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-gray-200 rounded-[12px] flex items-center justify-center">
                                        <span className="text-gray-500 text-sm">Card</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-Inter font-semibold text-[16px] sm:text-[18px] leading-[24px] text-[#1A1A1A]">
                                            {product.name}
                                        </h3>
                                        <p className="font-Inter text-[14px] sm:text-[16px] leading-[20px] text-[#666666]">
                                            {product.variant} • Quantity: {product.quantity}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="w-full flex justify-between">
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
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Customer Information */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-Inter font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-[0%] text-[#1A1A1A]">
                                Customer Information
                            </h2>

                            <div className="bg-[#F8F9FA] rounded-[16px] p-6 border border-[#E5E7EB]">
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="font-Inter font-medium text-[14px] leading-[20px] tracking-[0px] text-[#374151]">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full h-[48px] px-4 border border-[#D1D5DB] rounded-[8px] font-Inter text-[14px] leading-[20px] focus:outline-none focus:ring-2 focus:ring-[#252C46] focus:border-transparent"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="font-Inter font-medium text-[14px] leading-[20px] tracking-[0px] text-[#374151]">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full h-[48px] px-4 border border-[#D1D5DB] rounded-[8px] font-Inter text-[14px] leading-[20px] focus:outline-none focus:ring-2 focus:ring-[#252C46] focus:border-transparent"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="font-Inter font-medium text-[14px] leading-[20px] tracking-[0px] text-[#374151]">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full h-[48px] px-4 border border-[#D1D5DB] rounded-[8px] font-Inter text-[14px] leading-[20px] focus:outline-none focus:ring-2 focus:ring-[#252C46] focus:border-transparent"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="address" className="font-Inter font-medium text-[14px] leading-[20px] tracking-[0px] text-[#374151]">Delivery Address</label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-4 border border-[#D1D5DB] rounded-[8px] font-Inter text-[14px] leading-[20px] focus:outline-none focus:ring-2 focus:ring-[#252C46] focus:border-transparent resize-none"
                                            placeholder="Enter your delivery address"
                                            required
                                        />
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="w-full h-[48px] bg-[#252C46] text-white rounded-[8px] font-Inter font-semibold text-[14px] leading-[20px] hover:bg-[#1E293B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                    >
                                        {loading ? "Processing..." : "Complete Secure Payment"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Checkout;
