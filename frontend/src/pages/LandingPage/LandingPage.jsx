import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import arrow from "../../assets/arrow.png";
import avatar from "../../assets/avatar.png";
import ratings from "../../assets/ratings.png";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import box4 from "../../assets/box4.png";
import box5 from "../../assets/box5.png";
import box6 from "../../assets/box6.png";
import box7 from "../../assets/box7.png";
import box8 from "../../assets/box8.png";
import box9 from "../../assets/box9.png";
import pp from "../../assets/pp.png";
import profile from "../../assets/profile.png";
import profile1 from "../../assets/profile1.png";
import frame from "../../assets/frame.png";
import ceo from "../../assets/ceo.png";
import tick from "../../assets/tick.png";
import ttick from "../../assets/ttick.png";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import step4 from "../../assets/step4.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import star from "../../assets/star.png";
import mark from "../../assets/mark.png";
import mark1 from "../../assets/mark1.png";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
    return (
        <div className="w-full">
            <section className="h-[820px] flex justify-between bg-white relative py-[40px] px-[80px]">
                <div className="flex flex-col gap-5 mt-[150px]">
                    <h2 className="font-outfit font-normal text-[64px] text-[#1A1A1A] leading-[70px] tracking-[0%] w-[557px]">
                        One Card. <br /> Infinite Professional Presence.
                    </h2>
                    <p className="font-inter w-[565px] font-normal text-[20px] text-[#525252] leading-[30px]">
                        Carteon SmartCard empowers professionals to present multiple identities, update in real time, and connect without limits, all from a single intelligent NFC card.
                    </p>
                    <div className="flex gap-5">
                        <a className="w-[236px] h-[50px] flex items-center gap-2 bg-[#252C46] rounded-[8px] py-[14px] px-[30px] font-inter font-medium text-[13.6px] text-white leading-[24px] tracking-[0%] text-center align-middle" href="">
                            Get Your Carteon Card <img src={arrow} alt="" />
                        </a>
                        <a className="w-[179px] h-[50px] rounded-[8px] border border-[#D9D9D9] py-[14px] px-[32px] font-inter font-medium text-[13px] text-[#0F172A] leading-[24px] tracking-[0%] text-center align-middle" href="#how-it-works">
                            See How It Works
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={avatar} alt="" />
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={ratings} alt="" />
                            </div>
                            <p className="font-inter font-medium text-[12px] text-[#334155] leading-[20px] tracking-[0%] align-middle">
                                Trusted by 100+ executives
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-[85px]">
                    <img src={hero1} alt="" />
                    <div className="absolute top-66 left-159">
                        <img src={hero2} alt="" />
                    </div>
                </div>
            </section>
            <section className="h-[942px] w-full bg-white py-[60px] px-[80px]">
                <div className=" flex flex-col gap-2 justify-center items-center">
                    <h2 class="font-inter font-semibold text-[40px] text-[#1A1A1A] leading-[60px] tracking-[0%] text-center align-middle">The Old Way is <span class="font-inter font-semibold text-[40px] text-[#1A1A1A] leading-[60px] tracking-[0%] text-center align-middle line-through">Obsolete.</span></h2>
                    <p class="font-inter font-normal text-[20px] text-[#525252] leading-[28px] tracking-[0px] text-center w-[674px]">Traditional business cards don't reflect the dynamic, multi-dimensional executive you are.</p>
                </div>
                <div className="flex gap-5 mt-[63px]">
                    <div class="w-[407px] h-[199px] border border-[#E5E7EB] rounded-[12px] p-[20px] flex flex-col gap-3">
                        <div>
                            <img src={box1} alt="" />
                        </div>
                        <h4 class="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px] tracking-[0%] align-middle">Paper cards are disposable</h4>
                        <p class="font-inter font-normal text-[14px] text-[#525252] leading-[22px] tracking-[0%] align-middle">88% of paper business cards are thrown away within a week. Stop wasting money on trash.</p>
                    </div>
                    <div class="w-[407px] h-[199px] border border-[#E5E7EB] rounded-[12px] p-[20px] flex flex-col gap-3">
                        <div>
                            <img src={box2} alt="" />
                        </div>
                        <h4 class="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px] tracking-[0%] align-middle">Scattered Identity</h4>
                        <p class="font-inter font-normal text-[14px] text-[#525252] leading-[22px] tracking-[0%] align-middle">Your LinkedIn, portfolio, and contact info are all over the place. Consolidate your digital presence.</p>
                    </div>
                    <div class="w-[407px] h-[199px] border border-[#E5E7EB] rounded-[12px] p-[20px] flex flex-col gap-4">
                        <div>
                            <img src={box3} alt="" />
                        </div>
                        <h4 class="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px] tracking-[0%] align-middle">Missed Connections</h4>
                        <p class="font-inter font-normal text-[14px] text-[#525252] leading-[22px] tracking-[0%] align-middle">Manual data entry kills momentum. Networking moments are short—make them count instantly.</p>
                    </div>
                </div>
                <div class="w-[1201px] mt-[60px] h-[307px] rounded-[12px] p-[20px] bg-[#EAEEFD] flex gap-8">
                    <div className="flex flex-col gap-4 mt-[20px]">
                        <h4 class=" w-[498px] font-inter font-bold text-[36px] text-[#1A1A1A] leading-[40px] tracking-[0px]">Upgrade from static business cards to a dynamic, executive identity.</h4>
                        <p class=" w-[479px] font-inter font-normal text-[18px] text-[#525252] leading-[28px] tracking-[0px]">Carteon gives you the power to switch between professional personas instantly, all from one premium NFC card.</p>
                    </div>
                    <div className="mt-[26px] ml-[20px]">
                        <img src={profile} alt="" />
                        <img src={profile1} alt="" />
                    </div>
                </div>
            </section>
            <section className="h-[700px] w-full bg-[#F5F5F5] py-[60px] px-[80px]">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <h2 class="font-inter font-semibold text-[40px] text-[#0A0F1A] leading-[40px] tracking-[0%] text-center align-middle">Professional Identity Infrastructure.</h2>
                    <p class=" w-[862px] font-inter font-normal text-[20px] text-black leading-[40px] tracking-[0%] text-center align-middle">Carteon replaces the stack of paper cards with a dynamic, digital system that evolves with your career.</p>
                </div>
                <div className="flex gap-5 mt-[70px]">
                    <div class="w-[416px] h-[208px] bg-white rounded-[12px] p-[20px] flex flex-col gap-4">
                        <div>
                            <img src={box4} alt="" />
                        </div>
                        <h4 class="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px] tracking-[0%] align-middle">Instant Profile Access </h4>
                        <p class="font-inter font-normal text-[16px] text-[#525252] leading-[22px] tracking-[0%] align-middle">One tap shares your complete professional identity. No delays. No friction.</p>
                    </div>
                    <div class="w-[416px] h-[208px] bg-white rounded-[12px] p-[20px] flex flex-col gap-4">
                        <div>
                            <img src={box5} alt="" />
                        </div>
                        <h4 class="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px] tracking-[0%] align-middle">No App Required</h4>
                        <p class="font-inter font-normal text-[16px] text-[#525252] leading-[22px] tracking-[0%] align-middle">Recipients don't need an app to view your profile. Works natively on iOS and Android.</p>
                    </div>
                    <div class="w-[416px] h-[208px] bg-white rounded-[12px] p-[20px] flex flex-col gap-4">
                        <div>
                            <img src={box6} alt="" />
                        </div>
                        <h4 class="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px] tracking-[0%] align-middle">Live Editable Identity</h4>
                        <p class="font-inter font-normal text-[16px] text-[#525252] leading-[22px] tracking-[0%] align-middle">Changed jobs? New phone number? Update your profile instantly, anytime.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-[80px]">
                    <a className="w-[278px] h-[50px] flex items-center gap-2 bg-[#252C46] rounded-[8px] py-[14px] px-[30px] font-inter font-medium text-[13.6px] text-white leading-[24px] tracking-[0%] text-center align-middle" href="">
                        Get Your Carteon SmartCard <img src={arrow} alt="" />
                    </a>
                </div>
            </section>
            <section className="h-[700px] w-full bg-white py-[60px] px-[80px]">
                <div className="flex gap-5">
                    <div className="flex flex-col gap-4">
                        <h2 class="w-[522px] font-inter font-semibold text-[40px] text-[#0A0F1A] leading-[60px] tracking-[0%] align-middle">Built for Multi-Identity Professionals.</h2>
                        <p class=" w-[630px] font-inter font-normal text-[20px] text-[#525252] leading-[30px] tracking-[0%] align-middle">Carteon Smartcard allows you to maintain distinct professional personas in one secure infrastructure. Seamlessly toggle between your role as a CEO, board member, or investor, depending on who you're meeting.</p>
                        <ul className="mt-[30px] flex flex-col gap-6">
                            <li className="flex items-center gap-3 font-open-sans font-normal text-[20px] text-[#525252] leading-[32.5px] tracking-[0px]">
                                <img src={tick} alt="tick-icon" />
                                Switch identities instantly with one click
                            </li>
                            <li className="flex items-center gap-3 font-open-sans font-normal text-[20px] text-[#525252] leading-[32.5px] tracking-[0px]">
                                <img src={tick} alt="tick-icon" />
                                Custom branding for each professional profile
                            </li>
                            <li className="flex items-center gap-3 font-open-sans font-normal text-[20px] text-[#525252] leading-[32.5px] tracking-[0px]">
                                <img src={tick} alt="tick-icon" />
                                Share specific contact details for each role
                            </li>
                            <li className="flex items-center gap-3 font-open-sans font-normal text-[20px] text-[#525252] leading-[32.5px] tracking-[0px]">
                                <img src={tick} alt="tick-icon" />
                                Analytics to track engagement across profiles
                            </li>
                        </ul>
                    </div>
                    <div class="w-[690px] h-[547px] bg-[#F5F5F5] relative rounded-[20px]">
                        <img src={frame} class="w-[364px] h-[500px] absolute top-[45px] left-[40px] rounded-[25.4px] border-[6.77px] " alt="" />
                        <img src={ceo} className=" absolute z-999 top-72 left-75" alt="" />
                    </div>
                </div>
            </section>
            <section id="how-it-works" className="h-[2080px] w-full bg-[#F9FAFF] py-[60px] px-[80px]">
                <div className="flex flex-col gap- justify-center items-center">
                    <h4 class="font-inter mt-[20px] font-semibold text-[32px] text-[#1A1A1A] leading-[74px] tracking-[0%]">How it works</h4>
                    <h2 class="font-inter  font-semibold text-[48px] text-[#1A1A1A] leading-[74px] tracking-[0%]">From Purchase to First Tap In Minutes.</h2>
                    <p class="font-inter w-[718px] font-normal text-[20px] text-[#525252] leading-[30px] tracking-[0%] text-center">We have streamlined the process to get your executive card in your hands and your profile live without the hassle.</p>
                </div>
                <div class="w-[1204px] h-[397px] mt-[68px] flex items-center justify-between bg-[#F9FAFF] rounded-[16px] border border-[#D9D9D9] p-[10px] px-[20px]">
                    <div className="flex flex-col gap-7">
                        <h4 class="font-outfit font-semibold text-[48.38px] text-[#252C46] leading-[100%] tracking-[0%]">01</h4>
                        <div className="flex flex-col gap-2">
                            <h6 class="font-inter font-semibold text-[18px] text-[#1A1A1A] leading-[100%] tracking-[0%]">Order Your Card</h6>
                            <p class=" w-[463px] font-inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-[0%]">Select your preferred Carteon variant and complete secure checkout. Each card is precision-crafted.</p>
                        </div>
                    </div>
                    <div>
                        <img src={step1} alt="" />
                    </div>
                </div>
                <div class="w-[1204px] h-[397px] mt-[28px] flex items-center justify-between bg-[#F9FAFF] rounded-[16px] border border-[#D9D9D9] p-[10px] px-[20px]">
                    <div class="w-[383px] h-[373px] bg-[#EAEEFD] p-[20px] rounded-[8px]">
                        <img src={step2} alt="" />
                    </div>
                    <div className="flex flex-col gap-7">
                        <h4 class="font-outfit font-semibold text-[48.38px] text-[#252C46] leading-[100%] tracking-[0%]">02</h4>
                        <div className="flex flex-col gap-2">
                            <h6 class="font-inter font-semibold text-[18px] text-[#1A1A1A] leading-[100%] tracking-[0%]">Secure Checkout</h6>
                            <p class=" w-[459px] font-inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-[0%]">Complete your purchase with our encrypted, payment options including Paystack and Flutterwave.</p>
                        </div>
                    </div>
                </div>
                <div class="w-[1204px] h-[397px] mt-[28px] flex items-center justify-between bg-[#F9FAFF] rounded-[16px] border border-[#D9D9D9] p-[10px] px-[20px]">
                    <div className="flex flex-col gap-7">
                        <h4 class="font-outfit font-semibold text-[48.38px] text-[#252C46] leading-[100%] tracking-[0%]">03</h4>
                        <div className="flex flex-col gap-2">
                            <h6 class="font-inter font-semibold text-[18px] text-[#1A1A1A] leading-[100%] tracking-[0%]">Set Up Your Profile</h6>
                            <p class=" w-[459px] font-inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-[0%]">While your card ships, build your professional digital profile. Add your bio, photo, and links in minutes.</p>
                        </div>
                    </div>
                    <div class="w-[383px] h-[373px] bg-[#EAEEFD] p-[10px] rounded-[8px] relative">
                        <img src={step3} alt="" className="absolute top-13 left-25" />
                    </div>
                </div>
                <div class="w-[1204px] h-[397px] mt-[28px] flex items-center justify-between bg-[#F9FAFF] rounded-[16px] border border-[#D9D9D9] p-[10px] px-[20px]">
                    <div>
                        <img src={step4} alt="" />
                    </div>
                    <div className="flex flex-col gap-7">
                        <h4 class="font-outfit font-semibold text-[48.38px] text-[#252C46] leading-[100%] tracking-[0%]">04</h4>
                        <div className="flex flex-col gap-2">
                            <h6 class="font-inter font-semibold text-[18px] text-[#1A1A1A] leading-[100%] tracking-[0%]">Tap & Share Instantly</h6>
                            <p class=" w-[459px] font-inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-[0%]">Simply tap your card on any NFC enabled phone to share your professional identity. No app required for the receiver..</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-[1048px] w-full bg-[#F5F5F5] py-[60px] px-[80px]">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h2 class="font-inter font-bold text-[30.6px] text-[#1A1A1A] leading-[40px] text-center tracking-[0%] align-middle">Choose Your Carteon Smart Card</h2>
                    <p class=" w-[653px] font-inter font-normal text-[20px] text-[#525252] leading-[28px] text-center align-middle tracking-[0%]">Select the card that matches your style. All cards come with full NFC functionality.</p>
                </div>
                <div className="flex gap-[30px] mt-[70px]">
                    <div className="w-[403px] h-[773px] bg-white rounded-[20px] flex flex-col gap-3 p-[20px]">
                        <div>
                            <img
                                src={card1}
                                alt="Carteon Smart Card"
                                className="w-[100%] h-auto rounded-lg object-cover"
                            />
                        </div>
                        <h5 class="font-inter font-bold text-[20.4px] text-[#1A1A1A] leading-[32px] tracking-[0%] align-middle">Carteon Smart Card</h5>
                        <p class="font-inter font-normal text-[14px] text-[#6B7280] leading-[20px] align-middle tracking-[0%]">Premium stainless steel NFC card with instant tap connectivity.</p>
                        <p class="font-inter font-bold text-[30.6px] text-[#1A1A1A] leading-[40px] align-middle tracking-[0%]">₦50,000 <span class="font-inter font-normal text-[20px] text-[#1A1A1A] leading-[40px] align-middle tracking-[0%]">/ one-time</span></p>
                        <ul className="mt-[20px] flex flex-col gap-5">
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                NFC Tap Technology
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                QR Code Fallback
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                1 Default Profile
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Contact Collection System
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Email Notifications
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Lifetime Profile Edits
                            </li>
                        </ul>
                        <div className="mt-[50px] flex justify-center">
                            <a
                                href="#"
                                className="w-full max-w-[600px] h-[50px] rounded-[8px] border border-[#1A1A1A] bg-white py-[14px] px-[24px] font-inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] text-center align-middle mx-auto block"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                    <div className="w-[403px] h-[773px] bg-white rounded-[20px] flex flex-col gap-3 p-[20px]">
                        <div>
                            <img
                                src={card2}
                                alt="Carteon Smart Card"
                                className="w-[100%] h-auto rounded-lg object-cover"
                            />
                        </div>
                        <h5 class="font-inter font-bold text-[20.4px] text-[#1A1A1A] leading-[32px] tracking-[0%] align-middle">PVC QR Card</h5>
                        <p class="font-inter font-normal text-[14px] text-[#6B7280] leading-[20px] align-middle tracking-[0%]">Premium stainless steel NFC card with instant tap connectivity.</p>
                        <p class="font-inter font-bold text-[30.6px] text-[#1A1A1A] leading-[40px] align-middle tracking-[0%]">₦30,000 <span class="font-inter font-normal text-[20px] text-[#1A1A1A] leading-[40px] align-middle tracking-[0%]">/ one-time</span></p>
                        <ul className="mt-[20px] flex flex-col gap-5">
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Printed QR Code
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                1 Default Profile
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Contact Collection System
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Email Notifications
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Lifetime Profile Edits
                            </li>
                        </ul>
                        <p class=" mt-[7px] font-inter font-normal text-[14px] text-[#000000] leading-[20px] align-middle">QR Scan Only (No NFC Tap)</p>
                        <div className="mt-[50px] flex justify-center">
                            <a
                                href="#"
                                className="w-full max-w-[600px] h-[50px] rounded-[8px] border border-[#1A1A1A] bg-white py-[14px] px-[24px] font-inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] text-center align-middle mx-auto block"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                    <div className="w-[403px] h-[773px] bg-white rounded-[20px] flex flex-col gap-3 p-[20px]">
                        <div>
                            <img
                                src={card3}
                                alt="Carteon Smart Card"
                                className="w-[100%] h-auto rounded-lg object-cover"
                            />
                        </div>
                        <h5 class="font-inter font-bold text-[20.4px] text-[#1A1A1A] leading-[32px] tracking-[0%] align-middle">Complete Package</h5>
                        <p class="font-inter font-normal text-[14px] text-[#6B7280] leading-[20px] align-middle tracking-[0%]">Premium stainless steel NFC card with instant tap connectivity.</p>
                        <p class="font-inter font-bold text-[30.6px] text-[#1A1A1A] leading-[40px] align-middle tracking-[0%]">₦50,000 <span class="font-inter font-normal text-[20px] text-[#1A1A1A] leading-[40px] align-middle tracking-[0%]">/ one-time</span></p>
                        <ul className="mt-[20px] flex flex-col gap-5">
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                1 NFC Smart Card (Selected Finish)
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                1 PVC QR Backup Card
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                QR + NFC Enabled
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                1 Digital Profile
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Contact Collection System
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Email Notifications
                            </li>
                            <li className="flex items-center gap-3 font-inter font-normal text-[14px] text-[#525252] leading-[20px] align-middle tracking-[0%]">
                                <img src={ttick} alt="tick-icon" />
                                Lifetime Profile Edits
                            </li>
                        </ul>
                        <div className="mt-[11px] flex justify-center">
                            <a
                                href="#"
                                className="w-full max-w-[600px] h-[50px] rounded-[8px] border border-[#1A1A1A] bg-white py-[14px] px-[24px] font-inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] text-center align-middle mx-auto block"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-[690px] w-full bg-white py-[60px] px-[80px]" >
                <div className="flex gap-5">
                    <div>
                        <img src={pp} alt="" />
                    </div>
                    <div>
                        <h2 class="font-inter font-bold text-[48px] leading-[55px] tracking-[0px] text-[#1A1A1A]">Corporate & Executive Branding</h2>
                        <p class="font-inter mt-[10px] w-[631px] font-normal text-[20px] leading-[28px] tracking-[0px] text-[#525252]">Elevate your professional presence with custom branded templates that reflect your corporate identity</p>
                        <div className="flex flex-col gap-10 mt-[50px]">
                            <div className="flex items-center gap-4">
                                <div>
                                    <img src={box7} alt="" />
                                </div>
                                <div>
                                    <h4 class="font-inter font-semibold text-[20px] leading-[32px] tracking-[0px] text-[#1A1A1A] align-middle">Custom Brand Colors</h4>
                                    <p class="font-inter font-normal text-[16px] leading-[22px] tracking-[0px] text-[#525252] align-middle">Match your profile to your brand guidelines with custom color schemes and visual styling.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <img src={box8} alt="" />
                                </div>
                                <div>
                                    <h4 class="font-inter font-semibold text-[20px] leading-[32px] tracking-[0px] text-[#1A1A1A] align-middle">Company Logo Integration</h4>
                                    <p class="font-inter font-normal text-[16px] leading-[22px] tracking-[0px] text-[#525252] align-middle">Your corporate logo prominently displayed on your profile, maintaining brand consistency across all touchpoints.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <img src={box9} alt="" />
                                </div>
                                <div>
                                    <h4 class="font-inter font-semibold text-[20px] leading-[32px] tracking-[0px] text-[#1A1A1A] align-middle">Structured Design System</h4>
                                    <p class="font-inter font-normal text-[16px] leading-[22px] tracking-[0px] text-[#525252] align-middle">Maintain all Carteon functionality while expressing your unique brand identity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pricing" className="h-[941px] w-full bg-white py-[60px] px-[80px]">
                <div className=" mt-[30px] flex flex-col  justify-center items-center">
                    <h2 class="font-inter font-semibold text-[40px] leading-[60px] tracking-[0px] text-black text-center align-middle">Simple, Transparent Pricing</h2>
                    <p class="font-inter font-medium text-[20px] leading-[60px] tracking-[0px] text-[#0A0F1A] text-center align-middle">Start with one profile, upgrade when you need more professional identities</p>
                </div>
                <div className="mt-[60px] flex gap-10">
                    <div class="w-[413px] h-[539px] rounded-[20px] bg-white border-2 border-[#E5E7EB] p-5">
                        <h4 class="font-inter font-bold text-[24px] leading-[32px] tracking-[0px] text-[#101828]">Standard</h4>
                        <p class="font-inter mt-[10px] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#525252]">Perfect for getting started</p>
                        <div className="mt-[50px]">
                            <h4 class="font-arimo font-bold text-[36px] leading-[40px] tracking-[0px] text-[#101828]">Included</h4>
                            <p class="font-inter mt-[10px] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#4A5565]">with card purchase</p>
                        </div>
                        <ul className="mt-[50px] flex flex-col gap-5">
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark1} alt="" />
                                1 Default Profile                           
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark1} alt="" />
                               Instant NFC tap sharing
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark1} alt="" />
                                Contact information & links
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153] ">
                                <img src={mark1} alt="" />
                                Profile photo/logo
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark1} alt="" />
                                Mobile-optimized design
                            </li>
                        </ul>
                        <div class="w-[373px] h-[48px] rounded-[8px] bg-[#F3F4F6] px-[104px] py-[12px] mt-[30px]">
                            <a href="" class="font-inter font-semibold text-[16px] leading-[24px] tracking-[0px] text-[#6A7282] text-center" >Included with Card</a>
                        </div>
                    </div>
                    <div class="w-[408px] h-[575px] relative rounded-[24px] bg-white border-2 border-t-[2px] border-t-[#252C46] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                        <div class="w-[141px] h-[29px] flex items-center gap-1 px-[14px] py-[3px] absolute top-[-10px] left-23 rounded-[33554400px] bg-[#252C46]">
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <p class="font-arimo font-normal text-[14px] leading-[20px] tracking-[0px] text-white">Most Popular</p>
                        </div>
                    </div>
                    <div class="w-[413px] h-[539px] rounded-[20px] bg-white border-2 border-[#E5E7EB] p-5">

                    </div>
                </div>
                <div>

                </div>
            </section>
            <section id="faq" className="h-[1012px] w-full bg-[#F5F5F5] py-[60px] px-[80px]">

            </section>
            <section className="h-[528px] w-full bg-[#1A1A1A] py-[60px] px-[80px]">
                <div className="flex flex-col justify-center items-center gap-5 mt-[40px]">
                    <h2 class="font-inter w-[806px] font-bold text-[51px] leading-[60px] tracking-[0px] text-white text-center align-middle">Present Your Executive Identity Today </h2>
                    <p class="font-inter w-[690px] font-normal text-[20px] leading-[28px] tracking-[0px] text-[#A2B7DB] text-center align-middle">One tap, multiple professional identities, zero downloads. Join the future of networking.</p>
                    <div className="mt-[40px]">
                        <a href="#" class="w-[321px] h-[60px] rounded-[8px] bg-white shadow-[0px_10px_25px_-3px_rgba(255,255,255,0.3),0px_4px_6px_-2px_rgba(255,255,255,0.1)] pt-[16px] pr-[32px] pb-[16px] pl-[32px] font-inter font-medium text-[15.3px] leading-[28px] tracking-[0px] text-[#1A1A1A] text-center align-middle">Order Your Card Now</a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default LandingPage;