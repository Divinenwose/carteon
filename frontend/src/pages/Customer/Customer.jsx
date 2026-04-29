import Footer from "../../components/Footer/Footer";

const Customer = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center py-24">
                <div className=" mt-[40px]">
                    <h2 className="font-Inter font-bold text-[48px] text-[#1A1A1A] leading-[48px] tracking-[0%] text-center align-middle">CUSTOMER SUPPORT PAGE</h2>
                </div>
                <div className="flex flex-col items-center gap-7 mt-16">
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">We are Here to Help</h4>
                        <p className="font-Inter w-[780px] font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Have a question about your order, profile, or card? Choose the channel that works best for you - we aim to respond within one business day.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Support Channels</h4>
                        <p className="font-Inter w-[780px] font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]"><span>WhatsApp - Fastest Response</span> Tap to chat directly with our team on WhatsApp. Best for quick questions, order updates, and bulk enquiries. Available: Monday–Friday, 9 AM–5 PM WAT (Link to: <span><a className="font-inter font-normal text-[16px] text-[#252C46] leading-[24px] tracking-[0%]" href="#">wa.me/+2349110382642</a></span>)</p>
                        <br />
                        <p className="font-Inter w-[780px] font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]"><span className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Email Support - Within 24 Hours</span> For detailed enquiries, refund requests, technical issues, or anything that needs documentation.  <a href="mailto:support@carteon.co" className="font-Inter font-normal underline text-[16px] text-[#252C46] leading-[24px] tracking-[0%]">support@carteon.co</a> or <a href="mailto:carteoncard@gmail.com" className="font-Inter font-normal underline text-[16px] text-[#252C46] leading-[24px] tracking-[0%]">carteoncard@gmail.com</a></p>
                        <br />
                        <p className="font-Inter w-[780px] font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]"><span className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Phone / Callback - Business Hours Only </span>Leave your number and we will call you back. Best for complex orders or corporate enquiries. Available: Monday–Friday, 9 AM–5 PM WAT
                            For bulk and corporate enquiries, always include your team size and card type when reaching out</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-10">
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-black leading-[24px] tracking-[0%]">Response Standards</h4>
                    </div>
                    <div className="flex items-center gap-16">
                        <div className="flex flex-col gap-5">
                            <h4 className="font-Inter font-semibold text-[16px] text-black leading-[24px] tracking-[0%]">Issue Type</h4>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Order status / tracking</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Profile setup assistance</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">NFC / QR technical issue</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Damaged / defective card</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Refund request</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Bulk / corporate enquiry</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h4 className="font-Inter font-semibold text-[16px] text-black leading-[24px] tracking-[0%]">Channel</h4>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">WhatsApp / Email</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">WhatsApp / Email</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Email</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">WhatsApp / Email</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Email</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">WhatsApp / Email</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h4 className="font-Inter font-semibold text-[16px] text-black leading-[24px] tracking-[0%]">Response Time</h4>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Within 4 hours</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Within 8 hours</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Within 24 hours</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Within 4 hours</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Within 4 hours</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Within 1 business day</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h4 className="font-Inter font-semibold text-[16px] text-black leading-[24px] tracking-[0%]">Resolution Target</h4>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Same business day</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">1–2 business days</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">2–3 business days</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Same business day</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">7–10 business days (if approved)</p>
                            <p className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Custom timeline</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-7">
                    <h4  className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">Escalation</h4>
                    <p className="font-Inter w-[802px] font-normal text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%]">If your issue is not resolved within the stated timeframe, email <a href="mailto:support@carteon.co" className="font-Inter font-normal underline text-[16px] text-[#252C46] leading-[24px] tracking-[0%]">support@carteon.co</a> with your original support reference. A senior team member will respond within 24 hours.</p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    )
}

export default Customer;