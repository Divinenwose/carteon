import Footer from "../../components/Footer/Footer.jsx";

const Privacy = () => {
    return (
        <section className="w-full h-auto bg-white">
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
                <div className="mt-[50px] flex flex-col gap-3 sm:mt-[30px] md:mt-[40px]">
                    <h2 className="font-Inter font-bold text-[32px] sm:text-[40px] md:text-[48px] text-[#1A1A1A] leading-[34px] sm:leading-[42px] md:leading-[48px] tracking-[0%] text-center align-middle">Privacy Policy</h2>
                    <p className="font-Inter font-normal text-[14px] text-center w-[347px] sm:w-[748px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">Carteon ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, who we share it with, and what your rights are.</p>
                </div>
                <div className="flex flex-col gap-5 mt-12 sm:mt-14 md:mt-16 w-full max-w-4xl">
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">1. Information We Collect</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">Account & Order Data: Your name, email address, phone number, delivery address, and payment confirmation. We do not store your card or bank details - all payments are processed securely by Paystack and Flutterwave. <br />
                            Profile Data: Your professional title, company name, short bio, social media links, profile photo or logo, and any other information you submit through the profile setup form. <br />
                            Usage Data: Browser type, device type, IP address, pages visited, and time spent on the site. This is collected through standard web analytics tools. <br />
                            Communications: Any messages, emails, or enquiries you send to our support team.

                        </p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">2. How We Use Your Data</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">We use your information to:</p>
                        <ul className="list-disc pl-5 py-2">
                            <li>Process and fulfil your order</li>
                            <li>Create and manage your Carteon digital profile</li>
                            <li>Link your NFC card to your unique profile URL</li>
                            <li>Send order confirmations, updates, and shipping notifications</li>
                            <li>Respond to your support enquiries</li>
                            <li>Improve our website, products, and user experience</li>
                            <li>Send marketing communications — only with your consent. You may opt out at any time.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">3. Data Sharing</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">We do not sell your personal data to any third party. We may share your data with:</p>
                        <ul className="list-disc pl-5 py-2">
                            <li>Logistics partners - to process and deliver your order</li>
                            <li>Payment processors (Paystack) - subject to their own privacy policies</li>
                            <li>Analytics tools (e.g. Google Analytics) - in anonymised, aggregated form only</li>
                            <li>Legal authorities - where required to comply with Nigerian law or a valid legal order</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">4. Cookies</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">We use cookies to improve your browsing experience and analyse website traffic. You may disable cookies in your browser settings at any time. Please note that some features of the Carteon website may not function correctly if cookies are disabled.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">5. Your Rights</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">You have the right to:</p>
                        <ul className="list-disc pl-5 py-2">
                            <li>Access the personal data we hold about you</li>
                            <li>Request correction of any inaccurate information</li>
                            <li>Request deletion of your data, subject to any legal obligations we must fulfil</li>
                            <li>Withdraw consent to marketing communications at any time</li>
                        </ul>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">To exercise any of these rights, email us at: <a href="mailto:support@carteon.co" className="font-Inter font-normal underline text-[14px] sm:text-[15px] md:text-[16px] text-[#252C46] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">support@carteon.co</a></p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">6. Data Security</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">We apply industry-standard security measures to protect your personal data from unauthorised access, alteration, or disclosure. No method of data transmission over the internet is 100% secure, but we take every reasonable step to protect your information.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">7. Policy Updates</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised effective date. Continued use of Carteon after an update constitutes your acceptance of the revised policy.</p>
                    </div>
                    <div>
                        <h4 className="font-Inter font-semibold text-[16px] text-[#1A1A1A] leading-[24px] tracking-[0%] mb-3">8. Contact</h4>
                        <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#1A1A1A] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">For privacy-related enquiries: 📧 <a href="mailto:support@carteon.co" className="font-Inter font-normal underline text-[14px] sm:text-[15px] md:text-[16px] text-[#252C46] leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0%]">support@carteon.co</a></p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
}

export default Privacy;