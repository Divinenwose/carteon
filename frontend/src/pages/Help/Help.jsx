import Footer from "../../components/Footer/Footer.jsx";

const Help = () => {
    return (
        <section className="w-full h-auto bg-white">
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
                <div className="mt-[50px] sm:mt-[30px] md:mt-[40px]">
                    <h2 className="font-Inter font-bold text-[32px] sm:text-[40px] md:text-[48px] text-[#1A1A1A] leading-[34px] sm:leading-[42px] md:leading-[48px] tracking-[0%] text-center align-middle">HELP CENTER</h2>
                </div>
                <div className="flex flex-col gap-5 mt-12 sm:mt-14 md:mt-16 w-full max-w-4xl">
                    <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">Getting Started</h4>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">How does Carteon work?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> Your Carteon card contains an embedded NFC chip. When you tap it against a compatible smartphone, your digital profile opens instantly in the phone's browser - no app download required. You can also share your profile via the QR code on the card, which works on any smartphone camera.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">Which devices are compatible?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> Carteon works with all NFC-enabled smartphones running iOS 13 or later (iPhone 7 and above) and Android 6.0 or later. The profile opens directly in your browser. No app is ever required.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">What's included with my order?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> Every order includes your Carteon smart card (with NFC and QR code), setup instructions, and access to your profile editor via email link. The Complete Package includes both an NFC metal smart card and a PVC QR backup card.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">How do I edit my profile?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">  After your order is processed, you will receive a profile setup link via email. Use it to fill in your details. Once your card is linked, any changes you make to your profile are reflected instantly no need to reprint or replace your card. What can I put on my profile? Your profile can include your full name, professional title, company name, short bio, profile photo or logo, phone number, email address, WhatsApp number, website URL, LinkedIn, Instagram, X (Twitter), portfolio link, and a booking or Calendly link. You can toggle sections on or off at any time.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">Can I have more than one profile?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> The Standard Card and PVC QR Card each include one profile. Multi-profile functionality is on our product roadmap and will be available in a future update. For teams and organisations, each card comes with its own dedicated profile. Orders & Shipping</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">How long does delivery take?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> Lagos Standard: 2–4 business days at ₦3,000. Lagos Express: same day or next day at ₦5,000 for orders placed before 11 AM. Outside Lagos: 3–7 business days at ₦5,000-₦8,000. International: 7–21 business days, fee calculated at checkout. All orders are processed within 2-3 business days after payment and profile form submission.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">What payment methods do you accept?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> We accept card payments, bank transfers, and USSD via Paystack. Full payment is required before production begins. We do not store your card details.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">Can I change my order after placing it?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> Order changes including delivery address and card finish are only possible within 24 hours of placement and before production begins. Contact us immediately at <a href="mailto:support@carteon.co" className="font-Inter font-normal underline text-[14px] sm:text-[15px] md:text-[16px] text-[#252C46] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">support@carteon.co</a> if you need to make a change. After production starts, changes cannot be accommodated.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">Do you offer bulk or corporate orders?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> Yes. We offer custom pricing for teams, organisations, and corporate orders of any size. Chat us on WhatsApp or email <a href="mailto:support@carteon.co" className="font-Inter font-normal underline text-[14px] sm:text-[15px] md:text-[16px] text-[#252C46] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">support@carteon.co</a> with your team size, card type preference, and any specific requirements. We will respond within one business day with a custom quote.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">Troubleshooting</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> My NFC isn't working - what do I do? Try the following steps:</p>
                        <ol className="list-decimal pl-5 py-2">
                            <li>Make sure NFC is enabled on your phone - go to Settings and search for NFC.</li>
                            <li>Hold the card flat against the back of your phone near the top edge.</li>
                            <li>Remove your phone case if it is thick or contains metal, as this can block the NFC signal.</li>
                            <li>Try the QR code on the card as an alternative it works on any smartphone camera. If the issue persists, contact us at <a href="mailto:support@carteon.co" className="font-Inter font-normal underline text-[14px] sm:text-[15px] md:text-[16px] text-[#252C46] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">support@carteon.co</a> and we will resolve it within 2–3 business days.</li>
                        </ol>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">What is your refund policy?</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]"> The physical card is non-refundable once production has begun, due to its personalised nature. If your card arrives damaged or defective, contact us within 48 hours of delivery with clear photos at support@carteon.co. The 30-day money-back guarantee applies to the digital profile service only.</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
}

export default Help;