import Footer from "../../components/Footer/Footer";

const Shipping = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center py-30">
                <div className="flex flex-col gap-3">
                    <h2 className="font-Inter font-bold text-[48px] text-[#1A1A1A] leading-[48px] tracking-[0%] text-center align-middle">SHIPPING POLICY</h2>
                    <p className="font-Inter w-[671px] font-normal text-[16px] text-black leading-[24px] tracking-[0%] text-center">At Carteon, we process and ship every order with the same premium standard our cards
                        represent. Please review our shipping terms carefully before placing your order.
                    </p>
                    <p className="font-Inter font-medium text-[16px] text-black leading-[24px] tracking-[0%] text-center">Effective Date: Feb 2026 Last Updated: April 2026</p>
                </div>
                <div className="flex flex-col gap-5 mt-16">
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Lagos Delivery</h4>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Standard Delivery (2-4 business days) Fee: ₦3,000-5000</p>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Express Delivery (Same day / Next day - orders placed before 11 AM) Fee: ₦5,000</p>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Free delivery is not available at this time.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Outside Lagos (Nationwide)</h4>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Standard Delivery (3-7 business days) Fee: ₦5,000-₦8,000 depending on state</p>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Expedited Delivery (2–4 business days) Fee: ₦10,000-₦12,000</p>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Remote or hard-to-reach locations may attract additional charges.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">International Shipping</h4>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Shipping fee: Calculated at checkout based on destination country and package weight. Estimated <br /> delivery: 7–21 business days depending on destination.</p>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Carteon is not responsible for customs duties, import taxes, or delays caused by destination country <br /> customs clearance. These costs and responsibilities are solely borne by the recipient. </p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Processing Time</h4>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">All orders are processed within 2–3 business days after payment confirmation and profile form <br />submission. Orders are not processed on weekends or Nigerian public holidays.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Packaging</h4>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Every Carteon card is packaged in premium protective packaging designed to arrive in perfect <br /> condition. We do not ship in plain envelopes.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Order Tracking</h4>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">A tracking number will be provided via email once your order has been dispatched. <br /> Use the link in your confirmation email to track your  delivery in real time.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Non-Delivery</h4>
                        <p className="font-Inter font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">If your order is not delivered within the stated timeframe, contact us within 5 business days of the <br /> expected delivery date at support@carteon.co. We will investigate and resolve the issue promptly.</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    )
}

export default Shipping;