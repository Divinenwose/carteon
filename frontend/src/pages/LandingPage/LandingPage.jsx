import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
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
import arrowright from "../../assets/arrow-right.png";
import Footer from "../../components/Footer/Footer.jsx";


const faqData = [
    {
        question: "What is Carteon Smartcard?",
        answer:
            "Carteon Smartcard is a premium NFC-enabled smart card that acts as your digital identity hub. It allows you to share your contact information, social profiles, and professional portfolio with a single tap on any NFC-enabled smartphone.",
    },
    {
        question: "How does profile switching work?",
        answer:
            "Profile switching allows you to change the information your smart card shares. You can easily switch between personal, business, or custom profiles directly from your dashboard.",
    },
    {
        question: "Can I customize my profile design?",
        answer:
            "Yes. You can customize colors, layout, images, and content on your profile page to reflect your personal or business brand.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes. All user data is securely stored and protected using modern encryption standards. Only the information you choose to share will be visible to others.",
    },
    {
        question: "How long will it take for me to receive my card after payment?",
        answer:
            "Orders are typically processed within 24–48 hours and delivered within 3–7 business days depending on your location.",
    },
];

const LandingPage = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    const handleBuyNowClick = (product) => {
        navigate(`/cards/${product.slug}`, { state: { product } });
        window.scrollTo({ top: 0, behavior: "auto" });
    };

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        show: (i = 0) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
            },
        }),
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: 60 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const fadeScale = {
        hidden: { opacity: 0, scale: 0.95 },
        show: (i = 0) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: i * 0.1,
            },
        }),
    };

    return (
        <div className="w-full overflow-x-hidden">
            <motion.section
                className="h-auto w-full lg:h-[820px] flex flex-col lg:flex-row justify-between bg-white relative py-[40px] px-[20px] lg:px-[80px]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >

                <motion.div
                    variants={container}
                    className="flex flex-col gap-5 mt-[80px] lg:mt-[150px] items-center lg:items-start text-center lg:text-left"
                >

                    <motion.h2
                        variants={fadeUp}
                        className="font-outfit font-normal text-[40px] lg:text-[64px] text-[#1A1A1A] leading-[48px] lg:leading-[70px] w-full lg:w-[557px]"
                    >
                        One Card. <br /> Infinite Professional Presence.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="font-inter w-full lg:w-[565px] font-normal text-[18px] lg:text-[20px] text-[#525252] leading-[28px] lg:leading-[30px]"
                    >
                        Carteon SmartCard empowers professionals to present multiple identities, update in real time, and connect without limits, all from a single intelligent NFC card.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row gap-5"
                    >

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-[236px] h-[50px] flex items-center justify-center gap-2 bg-[#252C46] rounded-[8px] py-[14px] px-[30px] font-inter font-medium text-[13.6px] text-white leading-[24px] text-center"
                            href="/#choose"
                        >
                            Get Your Carteon Card <img src={arrow} alt="" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-[179px] h-[50px] flex items-center justify-center rounded-[8px] border border-[#D9D9D9] py-[14px] px-[32px] font-inter font-medium text-[13px] text-[#0F172A] leading-[24px] text-center"
                            href="#how-it-works"
                        >
                            See How It Works
                        </motion.a>

                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="flex items-center flex-col gap-4"
                    >
                        <img src={avatar} alt="" />

                        <div className="flex items-center flex-col gap-2">
                            <div>
                                <img src={ratings} alt="" />
                            </div>

                            <p className="font-inter font-medium text-[12px] text-[#334155] leading-[20px]">
                                Trusted by 100+ executives
                            </p>
                        </div>
                    </motion.div>

                </motion.div>

                {/* RIGHT */}
                <motion.div
                    variants={fadeLeft}
                    className="mt-[60px] lg:mt-[85px] flex justify-center relative"
                >

                    <motion.img
                        src={hero1}
                        alt=""
                        className="w-full max-w-[350px] sm:h-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="hidden lg:block absolute top-[40%] left-[20%] lg:top-49 lg:left-[-112%]"
                    >
                        <img src={hero2} alt="" className="w-[120px] lg:w-auto" />
                    </motion.div>

                </motion.div>

            </motion.section>
            <motion.section
                className="min-h-[942px] w-full bg-white py-[60px] px-[20px] md:px-[40px] lg:px-[80px] overflow-x-hidden"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >

                {/* HEADER */}
                <motion.div
                    variants={container}
                    className="flex flex-col gap-2 justify-center items-center"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-inter font-semibold text-[22px] md:text-[36px] lg:text-[40px] text-[#1A1A1A] leading-[40px] md:leading-[50px] lg:leading-[60px] text-center"
                    >
                        The Old Way is <span className="line-through">Obsolete.</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp} custom={1}
                        className="font-inter font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#525252] leading-[26px] md:leading-[28px] text-center w-full md:w-[600px] lg:w-[674px]"
                    >
                        Traditional business cards don't reflect the dynamic, multi-dimensional executive you are.
                    </motion.p>
                </motion.div>

                {/* CARDS */}
                <div className="mt-[63px]">

                    {/* MOBILE SWIPER */}
                    <div className="block md:hidden">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1.1}
                            autoplay={{ delay: 0, disableOnInteraction: false }}
                            speed={5000}
                            loop={true}
                        >

                            {[box1, box2, box3].map((box, i) => (
                                <SwiperSlide key={i} className="flex">
                                    <motion.div
                                        variants={fadeScale}
                                        className="w-full h-[225px] border border-[#E5E7EB] rounded-[12px] p-[20px] flex flex-col gap-2 bg-white"
                                    >
                                        <div>
                                            <img src={box} alt="" />
                                        </div>

                                        <h4 className="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px]">
                                            {i === 0 && "Paper cards are disposable"}
                                            {i === 1 && "Scattered Identity"}
                                            {i === 2 && "Missed Connections"}
                                        </h4>

                                        <p className="font-inter font-normal text-[14px] text-[#525252] leading-[22px]">
                                            {i === 0 &&
                                                "88% of paper business cards are thrown away within a week. Stop wasting money on trash."}
                                            {i === 1 &&
                                                "Your LinkedIn, portfolio, and contact info are all over the place. Consolidate your digital presence."}
                                            {i === 2 &&
                                                "Manual data entry kills momentum. Networking moments are short—make them count instantly."}
                                        </p>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* DESKTOP CARDS */}
                    <motion.div
                        variants={container}
                        className="hidden md:flex gap-5 justify-center items-stretch"
                    >
                        {[box1, box2, box3].map((box, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -8 }}
                                className="w-[407px] h-[199px] border border-[#E5E7EB] rounded-[12px] p-[20px] flex flex-col gap-3 bg-white transition"
                            >
                                <div>
                                    <img src={box} alt="" />
                                </div>

                                <h4 className="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px]">
                                    {i === 0 && "Paper cards are disposable"}
                                    {i === 1 && "Scattered Identity"}
                                    {i === 2 && "Missed Connections"}
                                </h4>

                                <p className="font-inter font-normal text-[14px] text-[#525252] leading-[22px]">
                                    {i === 0 &&
                                        "88% of paper business cards are thrown away within a week. Stop wasting money on trash."}
                                    {i === 1 &&
                                        "Your LinkedIn, portfolio, and contact info are all over the place. Consolidate your digital presence."}
                                    {i === 2 &&
                                        "Manual data entry kills momentum. Networking moments are short—make them count instantly."}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA SECTION */}
                <motion.div
                    variants={fadeUp}
                    className="w-full lg:w-[1201px] mt-[60px] h-auto lg:h-[307px] rounded-[12px] p-[20px] bg-[#EAEEFD] flex flex-col lg:flex-row gap-8 mx-auto"
                >

                    <div className="flex flex-col gap-4 mt-[20px]">
                        <h4 className="w-full lg:w-[498px] font-inter font-bold text-[26px] md:text-[30px] lg:text-[36px] text-[#1A1A1A] leading-[36px] lg:leading-[40px]">
                            Upgrade from static business cards to a dynamic, executive identity.
                        </h4>

                        <p className="w-full lg:w-[479px] font-inter font-normal text-[16px] md:text-[17px] lg:text-[18px] text-[#525252] leading-[26px] lg:leading-[28px]">
                            Carteon gives you the power to switch between professional personas instantly, all from one premium NFC card.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-[26px] ml-0 lg:ml-[20px] flex flex-col justify-center"
                    >
                        <img src={profile} alt="" />
                        <img src={profile1} alt="" />
                    </motion.div>

                </motion.div>

            </motion.section>
            <motion.section
                className="min-h-[700px] w-full bg-[#F5F5F5] py-[60px] px-[20px] md:px-[40px] lg:px-[80px] overflow-x-hidden"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={container}
                    className="flex flex-col gap-2 justify-center items-center"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-inter font-semibold text-[28px] md:text-[34px] lg:text-[40px] text-[#0A0F1A] leading-[34px] md:leading-[38px] lg:leading-[40px] text-center"
                    >
                        Professional Identity Infrastructure.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        className="w-full md:w-[700px] lg:w-[862px] font-inter font-normal text-[16px] md:text-[18px] lg:text-[20px] text-black leading-[28px] md:leading-[34px] lg:leading-[40px] text-center"
                    >
                        Carteon replaces the stack of paper cards with a dynamic, digital system that evolves with your career.
                    </motion.p>
                </motion.div>
                <motion.div
                    variants={container}
                    className="block md:hidden mt-[70px]"
                >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={5000}
                        loop={true}
                    >
                        {[box4, box5, box6].map((box, i) => (
                            <SwiperSlide key={i} className="flex">
                                <motion.div
                                    variants={fadeScale}
                                    custom={i}
                                    className="w-full h-auto bg-white rounded-[12px] p-[20px] flex flex-col gap-4"
                                >
                                    <div>
                                        <img src={box} alt="" />
                                    </div>

                                    <h4 className="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px]">
                                        {i === 0 && "Instant Profile Access"}
                                        {i === 1 && "No App Required"}
                                        {i === 2 && "Live Editable Identity"}
                                    </h4>

                                    <p className="font-inter font-normal text-[16px] text-[#525252] leading-[22px]">
                                        {i === 0 && "One tap shares your complete professional identity. No delays. No friction."}
                                        {i === 1 && "Recipients don't need an app to view your profile. Works natively on iOS and Android."}
                                        {i === 2 && "Changed jobs? New phone number? Update your profile instantly, anytime."}
                                    </p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                <motion.div
                    variants={container}
                    className="hidden md:flex gap-5 mt-[70px] justify-center items-center"
                >
                    {[box4, box5, box6].map((box, i) => (
                        <motion.div
                            key={i}
                            variants={fadeScale}
                            custom={i}
                            whileHover={{ y: -8 }}
                            className="w-full md:w-[416px] h-auto md:h-[208px] bg-white rounded-[12px] p-[20px] flex flex-col gap-4 transition"
                        >
                            <div>
                                <img src={box} alt="" />
                            </div>

                            <h4 className="font-inter font-bold text-[20px] text-[#1A1A1A] leading-[28px]">
                                {i === 0 && "Instant Profile Access"}
                                {i === 1 && "No App Required"}
                                {i === 2 && "Live Editable Identity"}
                            </h4>

                            <p className="font-inter font-normal text-[16px] text-[#525252] leading-[22px]">
                                {i === 0 && "One tap shares your complete professional identity. No delays. No friction."}
                                {i === 1 && "Recipients don't need an app to view your profile. Works natively on iOS and Android."}
                                {i === 2 && "Changed jobs? New phone number? Update your profile instantly, anytime."}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    className="flex justify-center items-center mt-[60px] md:mt-[80px]"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-[280px] md:w-[260px] lg:w-[278px] h-[50px] flex items-center justify-center gap-2 bg-[#252C46] rounded-[8px] py-[14px] px-[30px] font-inter font-medium text-[13px] text-white leading-[24px]"
                        href="#choose"
                    >
                        Get Your Carteon SmartCard
                        <img src={arrow} alt="" />
                    </motion.a>
                </motion.div>
            </motion.section>
            <motion.section
                className="min-h-[700px] w-full bg-white py-[60px] px-[20px] md:px-[40px] lg:px-[80px] overflow-x-hidden"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={container}
                    className="flex flex-col lg:flex-row gap-10 lg:gap-5 items-center"
                >
                    <motion.div
                        variants={container}
                        className="flex flex-col gap-4"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="w-full lg:w-[522px] font-inter font-semibold text-[28px] md:text-[34px] lg:text-[40px] text-[#0A0F1A] leading-[40px] md:leading-[50px] lg:leading-[60px]"
                        >
                            Built for Multi-Identity Professionals.
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={1}
                            className="w-full lg:w-[630px] font-inter font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#525252] leading-[26px] md:leading-[28px] lg:leading-[30px]"
                        >
                            Carteon Smartcard allows you to maintain distinct professional personas in one secure infrastructure. Seamlessly toggle between your role as a CEO, board member, or investor, depending on who you're meeting.
                        </motion.p>

                        <motion.ul
                            variants={container}
                            className="mt-[30px] flex flex-col gap-6"
                        >
                            {["Switch identities instantly with one click", "Custom branding for each professional profile", "Share specific contact details for each role", "Analytics to track engagement across profiles"].map((text, i) => (
                                <motion.li
                                    key={i}
                                    variants={fadeUp}
                                    custom={i + 2}
                                    className="flex items-center gap-3 font-open-sans text-[16px] md:text-[18px] lg:text-[20px] text-[#525252] leading-[28px] lg:leading-[32.5px]"
                                >
                                    <img src={tick} alt="tick-icon" />
                                    {text}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        variants={fadeLeft}
                        className="w-full max-w-[690px] h-[400px] md:h-[500px] lg:h-[547px] bg-[#F5F5F5] relative rounded-[20px] flex justify-center"
                    >
                        <motion.img
                            src={frame}
                            className="w-[260px] md:w-[320px] lg:w-[364px] h-auto absolute top-[30px] md:top-[40px] lg:top-[45px] left-[20px] md:left-[30px] lg:left-[40px] rounded-[25.4px] border-[6.77px]"
                            alt=""
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        />

                        <motion.img
                            src={ceo}
                            className="absolute z-10 bottom-[40px] w-[160px] right-[-20px] md:w-[230px] bottom-[-5px] md:right-[5px]"
                            alt=""
                            initial={{ scale: 0.8, opacity: 0, x: 50 }}
                            whileInView={{ scale: 1, opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        />
                    </motion.div>

                </motion.div>
            </motion.section>
            <motion.section
                id="how-it-works"
                className="w-full bg-[#F9FAFF] py-[60px] px-[20px] md:px-[40px] lg:px-[80px]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={container}
                    className="flex flex-col gap-2 justify-center items-center"
                >
                    <motion.h4
                        variants={fadeUp}
                        className="font-inter mt-[20px] font-semibold text-[28px] md:text-[32px] lg:text-[32px] text-[#1A1A1A] leading-[40px] md:leading-[50px] lg:leading-[74px] tracking-[0%]"
                    >
                        How it works
                    </motion.h4>
                    <motion.h2
                        variants={fadeUp}
                        custom={1}
                        className="font-inter font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#1A1A1A] leading-[38px] md:leading-[60px] lg:leading-[74px] tracking-[0%] text-center"
                    >
                        From Purchase to First Tap In Minutes.
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        className="font-inter w-full max-w-[718px] font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#525252] leading-[24px] md:leading-[28px] lg:leading-[30px] tracking-[0%] text-center"
                    >
                        We have streamlined the process to get your executive card in your hands and your profile live without the hassle.
                    </motion.p>
                </motion.div>
                <div className="block md:hidden mt-[40px]">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={5000}
                        loop={true}
                    >
                        {[step1, step2, step3, step4].map((stepImg, idx) => (
                            <SwiperSlide key={idx} className="flex justify-center">
                                <div className="w-full h-[385px] max-w-[350px] bg-[#F9FAFF] rounded-[16px] border border-[#D9D9D9] p-[10px] flex flex-col gap-4">
                                    <h4 className="font-outfit font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#252C46] leading-[100%] tracking-[0%]">
                                        {`0${idx + 1}`}
                                    </h4>
                                    <div className="flex flex-col gap-2">
                                        <h6 className="font-inter font-semibold text-[16px] md:text-[18px] text-[#1A1A1A] leading-[100%] tracking-[0%]">
                                            {idx === 0
                                                ? "Order Your Card"
                                                : idx === 1
                                                    ? "Secure Checkout"
                                                    : idx === 2
                                                        ? "Set Up Your Profile"
                                                        : "Tap & Share Instantly"}
                                        </h6>
                                        <p className="font-inter font-normal text-[14px] md:text-[16px] text-[#525252] leading-[18px] md:leading-[20px] tracking-[0%]">
                                            {idx === 0
                                                ? "Select your preferred Carteon variant and complete secure checkout. Each card is precision-crafted."
                                                : idx === 1
                                                    ? "Complete your purchase with our encrypted, payment options including Paystack and Flutterwave."
                                                    : idx === 2
                                                        ? "While your card ships, build your professional digital profile. Add your bio, photo, and links in minutes."
                                                        : "Simply tap your card on any NFC enabled phone to share your professional identity. No app required for the receiver."}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-[283px] h-[200px] md:h-[373px] bg-[#EAEEFD] p-[10px] rounded-[8px] relative flex justify-center items-center">
                                        <img
                                            src={stepImg}
                                            alt={`Step ${idx + 1}`}
                                            className={`w-[180px] ${idx === 2 ? "h-[190px]  pt-[8px] sm:h-[160px]" : ""}`}
                                        // Step 3 image reduced height on mobile
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <motion.div
                    variants={container}
                    className="hidden md:flex flex-col gap-[20px] mt-[40px]"
                >
                    <motion.div
                        variants={fadeScale}
                        custom={0}
                        className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1204px] h-auto md:h-[397px] bg-[#F9FAFF] rounded-[16px] border border-[#D9D9D9] p-[10px] px-[10px] md:px-[20px]"
                    >
                        <motion.div
                            variants={container}
                            className="flex flex-col gap-4 md:gap-7 w-full md:w-auto"
                        >
                            <motion.h4
                                variants={fadeUp}
                                className="font-outfit font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#252C46] leading-[100%] tracking-[0%]"
                            >
                                01
                            </motion.h4>
                            <motion.div
                                variants={container}
                                className="flex flex-col gap-2"
                            >
                                <motion.h6
                                    variants={fadeUp}
                                    custom={1}
                                    className="font-inter font-semibold text-[16px] md:text-[18px] text-[#1A1A1A] leading-[100%] tracking-[0%]"
                                >
                                    Order Your Card
                                </motion.h6>
                                <motion.p
                                    variants={fadeUp}
                                    custom={2}
                                    className="font-inter font-normal text-[14px] md:text-[16px] text-[#525252] leading-[18px] md:leading-[20px] tracking-[0%] w-full md:w-[463px]"
                                >
                                    Select your preferred Carteon variant and complete secure checkout. Each card is precision-crafted.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={fadeLeft}
                            className="w-full md:w-[383px] mt-4 md:mt-0 flex justify-center md:justify-end"
                        >
                            <motion.img
                                src={step1}
                                alt=""
                                className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px]"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={fadeScale}
                        custom={1}
                        className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[1204px] h-auto md:h-[397px] bg-[#F9FAFF] rounded-[16px] border border-[#D9D9D9] p-[10px] px-[10px] md:px-[20px]"
                    >
                        <motion.div
                            variants={fadeLeft}
                            className="w-full md:w-auto mt-4 md:mt-0"
                        >
                            <div className="w-full md:w-[383px] h-auto md:h-[373px] bg-[#EAEEFD] p-[10px] md:p-[20px] rounded-[8px] flex justify-center items-center">
                                <motion.img
                                    src={step2}
                                    alt=""
                                    className="w-full h-auto max-w-[250px] md:max-w-full"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={container}
                            className="flex flex-col gap-4 md:gap-7 w-full md:w-auto"
                        >
                            <motion.h4
                                variants={fadeUp}
                                className="font-outfit font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#252C46] leading-[100%] tracking-[0%]"
                            >
                                02
                            </motion.h4>
                            <motion.div
                                variants={container}
                                className="flex flex-col gap-2"
                            >
                                <motion.h6
                                    variants={fadeUp}
                                    custom={1}
                                    className="font-inter font-semibold text-[16px] md:text-[18px] text-[#1A1A1A] leading-[100%] tracking-[0%]"
                                >
                                    Secure Checkout
                                </motion.h6>
                                <motion.p
                                    variants={fadeUp}
                                    custom={2}
                                    className="font-inter font-normal text-[14px] md:text-[16px] text-[#525252] leading-[18px] md:leading-[20px] tracking-[0%] w-full md:w-[459px]"
                                >
                                    Complete your purchase with our encrypted, payment options including Paystack and Flutterwave.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={fadeScale}
                        custom={2}
                        className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1204px] h-auto md:h-[397px] bg-[#F9FAFF] rounded-[16px] border border-[#D9D9D9] p-[10px] px-[10px] md:px-[20px]"
                    >
                        <motion.div
                            variants={container}
                            className="flex flex-col gap-4 md:gap-7 w-full md:w-auto"
                        >
                            <motion.h4
                                variants={fadeUp}
                                className="font-outfit font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#252C46] leading-[100%] tracking-[0%]"
                            >
                                03
                            </motion.h4>
                            <motion.div
                                variants={container}
                                className="flex flex-col gap-2"
                            >
                                <motion.h6
                                    variants={fadeUp}
                                    custom={1}
                                    className="font-inter font-semibold text-[16px] md:text-[18px] text-[#1A1A1A] leading-[100%] tracking-[0%]"
                                >
                                    Set Up Your Profile
                                </motion.h6>
                                <motion.p
                                    variants={fadeUp}
                                    custom={2}
                                    className="font-inter font-normal text-[14px] md:text-[16px] text-[#525252] leading-[18px] md:leading-[20px] tracking-[0%] w-full md:w-[459px]"
                                >
                                    While your card ships, build your professional digital profile. Add your bio, photo, and links in minutes.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={fadeLeft}
                            className="w-full md:w-auto mt-4 md:mt-0"
                        >
                            <div className="w-full md:w-[383px] h-[200px] md:h-[373px] bg-[#EAEEFD] p-[10px] rounded-[8px] relative flex justify-center items-center">
                                <motion.img
                                    src={step3}
                                    alt=""
                                    className="absolute top-[24px] left-[34px] md:top-13 md:left-13 w-full max-w-[200px] sm:max-w-[220px] md:max-w-[300px] h-[175px] sm:h-[150px] md:h-[320px] object-contain"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={fadeScale}
                        custom={3}
                        className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[1204px] h-auto md:h-[397px] bg-[#F9FAFF] rounded-[16px] border border-[#D9D9D9] p-[10px] px-[10px] md:px-[20px]"
                    >
                        <motion.div
                            variants={fadeLeft}
                            className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-start"
                        >
                            <motion.img
                                src={step4}
                                alt=""
                                className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-full h-auto"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            />
                        </motion.div>
                        <motion.div
                            variants={container}
                            className="flex flex-col gap-4 md:gap-7 w-full md:w-auto mt-4 md:mt-0"
                        >
                            <motion.h4
                                variants={fadeUp}
                                className="font-outfit font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#252C46] leading-[100%] tracking-[0%]"
                            >
                                04
                            </motion.h4>
                            <motion.div
                                variants={container}
                                className="flex flex-col gap-2"
                            >
                                <motion.h6
                                    variants={fadeUp}
                                    custom={1}
                                    className="font-inter font-semibold text-[16px] md:text-[18px] text-[#1A1A1A] leading-[100%] tracking-[0%]"
                                >
                                    Tap & Share Instantly
                                </motion.h6>
                                <motion.p
                                    variants={fadeUp}
                                    custom={2}
                                    className="font-inter font-normal text-[14px] md:text-[16px] text-[#525252] leading-[18px] md:leading-[20px] tracking-[0%] w-full md:w-[459px]"
                                >
                                    Simply tap your card on any NFC enabled phone to share your professional identity. No app required for the receiver.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
            <motion.section
                id="choose"
                className="w-full bg-[#F5F5F5] py-[90px] px-[20px] md:px-[40px] lg:px-[80px]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={container}
                    className="flex flex-col gap-3 justify-center items-center"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-inter font-bold text-[24px] md:text-[28px] lg:text-[30.6px] text-[#1A1A1A] leading-[32px] md:leading-[36px] lg:leading-[40px] text-center tracking-[0%] align-middle"
                    >
                        Choose Your Carteon Smart Card
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        className="w-full max-w-[653px] font-inter font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#525252] leading-[24px] md:leading-[26px] lg:leading-[28px] text-center align-middle tracking-[0%]"
                    >
                        Select the card that matches your style. All cards come with full NFC functionality.
                    </motion.p>
                </motion.div>
                <motion.div
                    variants={container}
                    className="hidden md:flex flex-col md:flex-row gap-[20px] md:gap-[30px] mt-[40px] md:mt-[70px] justify-center items-start"
                >
                    {[card1, card2, card3].map((card, i) => {
                        const cardData = [
                            { name: "Carteon Smart Card", desc: "Premium stainless steel NFC card with instant tap connectivity.", price: "₦50,000", priceUnit: "/ one-time", slug: "carteon-smart-card", basePrice: 50000, finishes: ['Matte Black Metal', 'Gold Metal', 'Silver Metal', 'Gold mirror'] },
                            { name: "PVC QR Card", desc: "Premium stainless steel NFC card with instant tap connectivity.", price: "₦30,000", priceUnit: "", slug: "pvc-qr-card", basePrice: 30000, finishes: [] },
                            { name: "Complete Package", desc: "Bundle of Smart Card and PVC QR Card", price: "₦60,000", priceUnit: "", slug: "complete-package", basePrice: 60000, finishes: ['Matte Black Metal', 'Gold Metal', 'Silver Metal', 'Gold mirror'] }
                        ];
                        const currentCard = cardData[i];

                        return (
                            <motion.div
                                key={i}
                                variants={fadeScale}
                                custom={i}
                                whileHover={{ y: -8 }}
                                className="w-full md:w-[403px] h-auto md:h-[773px] bg-white rounded-[20px] flex flex-col gap-3 p-[20px] transition"
                            >
                                <motion.div
                                    variants={fadeUp}
                                    custom={i}
                                >
                                    <img src={card} alt={`${currentCard.name}`} className="w-full h-auto rounded-lg object-cover" />
                                </motion.div>
                                <motion.h5
                                    variants={fadeUp}
                                    custom={i + 1}
                                    className="font-inter font-bold text-[20.4px] text-[#1A1A1A] leading-[32px]"
                                >
                                    {currentCard.name}
                                </motion.h5>
                                <motion.p
                                    variants={fadeUp}
                                    custom={i + 2}
                                    className="font-inter text-[14px] text-[#6B7280]"
                                >
                                    {currentCard.desc}
                                </motion.p>
                                <motion.p
                                    variants={fadeUp}
                                    custom={i + 3}
                                    className="font-inter font-bold text-[30.6px] text-[#1A1A1A]"
                                >
                                    {currentCard.price} {currentCard.priceUnit && <span className="font-normal text-[20px]">{currentCard.priceUnit}</span>}
                                </motion.p>
                                <motion.ul
                                    variants={container}
                                    className="mt-[20px] flex flex-col gap-5"
                                >
                                    {i === 0 && ["NFC Tap Technology", "QR Code Fallback", "1 Default Profile", "Contact Collection System", "Email Notifications", "Lifetime Profile Edits"].map((feature, j) => (
                                        <motion.li
                                            key={j}
                                            variants={fadeUp}
                                            custom={i + 4 + j}
                                            className="flex items-center gap-3 text-[14px]"
                                        >
                                            <img src={ttick} />{feature}
                                        </motion.li>
                                    ))}
                                    {i === 1 && ["Printed QR Code", "1 Default Profile", "Contact Collection System", "Email Notifications", "Lifetime Profile Edits"].map((feature, j) => (
                                        <motion.li
                                            key={j}
                                            variants={fadeUp}
                                            custom={i + 4 + j}
                                            className="flex items-center gap-3 text-[14px]"
                                        >
                                            <img src={ttick} />{feature}
                                        </motion.li>
                                    ))}
                                    {i === 2 && ["1 NFC Smart Card", "1 PVC QR Backup Card", "QR + NFC Enabled", "1 Digital Profile", "Contact Collection System", "Email Notifications", "Lifetime Profile Edits"].map((feature, j) => (
                                        <motion.li
                                            key={j}
                                            variants={fadeUp}
                                            custom={i + 4 + j}
                                            className="flex items-center gap-3 text-[14px]"
                                        >
                                            <img src={ttick} />{feature}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                {i === 1 && (
                                    <motion.p
                                        variants={fadeUp}
                                        custom={i + 10}
                                        className="text-[14px] mt-[7px]"
                                    >
                                        QR Scan Only (No NFC Tap)
                                    </motion.p>
                                )}
                                <motion.div
                                    variants={fadeUp}
                                    custom={i + 11}
                                    className={`mt-[${i === 2 ? "0" : "30"}px] flex justify-center`}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleBuyNowClick({ slug: currentCard.slug, name: currentCard.name, basePrice: currentCard.basePrice, finishes: currentCard.finishes })}
                                        className="w-full h-[50px] rounded-[8px] cursor-pointer border border-[#1A1A1A] flex items-center justify-center text-[14px]"
                                    >
                                        Buy Now
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
                <motion.div
                    variants={container}
                    className="block md:hidden mt-[40px] overflow-x-auto"
                >
                    <motion.table
                        variants={fadeScale}
                        className="w-full h-auto pb-[5px] border border-[#E5E7EB] rounded-[12px] overflow-hidden shadow-md border-separate border-spacing-0"
                    >
                        <thead>
                            <tr className="bg-[#000] text-[#fff]">
                                <th className="p-2 text-left font-inter font-bold text-[16px] leading-[20px] tracking-[0px] text-[#fff] align-middle">Features</th>
                                <th className="p-2 font-inter font-bold text-[16px] leading-[20px] tracking-[0px] text-[#fff] align-middle">Carteon Smart Card</th>
                                <th className="p-2 font-inter font-bold text-[16px] leading-[20px] tracking-[0px] text-[#fff] align-middle">PVC QR Card</th>
                                <th className="p-2 font-inter font-bold text-[16px] leading-[20px] tracking-[0px] text-[#fff] align-middle">Complete Package</th>
                            </tr>
                        </thead>
                        <tbody className="[&>tr:nth-child(even)]:bg-[#FAFAFA]">
                            <motion.tr
                                variants={fadeUp}
                                custom={0}
                                className="border-t border-[#E5E7EB]"
                            >
                                <td className="p-2 font-inter font-bold text-[14px] text-[#000]">Image</td>
                                <td><motion.img variants={fadeUp} custom={1} src={card1} className="w-[70px] mx-auto" /></td>
                                <td><motion.img variants={fadeUp} custom={2} src={card2} className="w-[70px] mx-auto" /></td>
                                <td><motion.img variants={fadeUp} custom={3} src={card3} className="w-[70px] mx-auto" /></td>
                            </motion.tr>
                            <motion.tr
                                variants={fadeUp}
                                custom={4}
                                className="border-t border-[#E5E7EB]"
                            >
                                <td className="p-2 font-inter font-bold text-[14px] text-[#000]">Price</td>
                                <td className="text-center font-inter font-bold text-[14px] text-[#000]">₦50,000</td>
                                <td className="text-center font-inter font-bold text-[14px] text-[#000]">₦30,000</td>
                                <td className="text-center font-inter font-bold text-[14px] text-[#000]">₦60,000</td>
                            </motion.tr>
                            {["Email Notification", "Lifetime Profile Edits", "Contact Collection System", "NFC Tap Technology", "Printed QR Code", "1 Default Profile", "QR + NFC Enabled", "1 NFC Smart Card", "1 PVC QR Backup Card"].map((feature, i) => {
                                const getCheckmark = (cardIndex, featureName) => {
                                    const features = [
                                        ["Email Notification", "Lifetime Profile Edits", "Contact Collection System", "NFC Tap Technology", "QR Code Fallback", "1 Default Profile"],
                                        ["Email Notification", "Lifetime Profile Edits", "Contact Collection System", "Printed QR Code", "1 Default Profile"],
                                        ["Email Notification", "Lifetime Profile Edits", "Contact Collection System", "QR + NFC Enabled", "1 Digital Profile", "1 NFC Smart Card", "1 PVC QR Backup Card"]
                                    ];
                                    return features[cardIndex].includes(featureName) ? "✅" : "❌";
                                };

                                return (
                                    <motion.tr
                                        key={i}
                                        variants={fadeUp}
                                        custom={5 + i}
                                        className="border-t border-[#E5E7EB]"
                                    >
                                        <td className="p-2 font-inter font-bold text-[14px] text-[#000]">{feature}</td>
                                        <td className="text-center">{getCheckmark(0, feature)}</td>
                                        <td className="text-center">{getCheckmark(1, feature)}</td>
                                        <td className="text-center">{getCheckmark(2, feature)}</td>
                                    </motion.tr>
                                );
                            })}
                            <motion.tr
                                variants={fadeUp}
                                custom={15}
                                className="border-t border-[#E5E7EB]"
                            >
                                <td className="p-2 font-Inter font-bold text-[14px] text-[#000]">Action</td>
                                <td className="text-center">
                                    <motion.button
                                        variants={fadeUp}
                                        custom={16}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleBuyNowClick({ slug: "carteon-smart-card", name: "Carteon Smart Card", basePrice: 50000, finishes: ['Matte Black Metal', 'Gold Metal', 'Silver Metal', 'Gold mirror'] })}
                                        className="w-[70px] h-[50px] rounded-[8px] border border-[#1A1A1A] flex items-center justify-center text-[14px]"
                                    >
                                        Buy
                                    </motion.button>
                                </td>
                                <td className="text-center">
                                    <motion.button
                                        variants={fadeUp}
                                        custom={17}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleBuyNowClick({ slug: "pvc-qr-card", name: "PVC QR Card", basePrice: 30000, finishes: [] })}
                                        className="w-[70px] h-[50px] rounded-[8px] border border-[#1A1A1A] flex items-center justify-center text-[14px]"
                                    >
                                        Buy
                                    </motion.button>
                                </td>
                                <td className="text-center">
                                    <motion.button
                                        variants={fadeUp}
                                        custom={18}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleBuyNowClick({ slug: "complete-package", name: "Complete Package", basePrice: 60000, finishes: ['Matte Black Metal', 'Gold Metal', 'Silver Metal', 'Gold mirror'] })}
                                        className="w-[70px] h-[50px] rounded-[8px] border border-[#1A1A1A] flex items-center justify-center text-[14px]"
                                    >
                                        Buy
                                    </motion.button>
                                </td>
                            </motion.tr>
                        </tbody>
                    </motion.table>
                </motion.div>
            </motion.section>
            <motion.section
                className="w-full bg-white py-[60px] px-[20px] md:px-[40px] lg:px-[80px] h-auto md:h-[690px]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={container}
                    className="flex flex-col-reverse md:flex-row gap-10 md:gap-5"
                >
                    <motion.div
                        variants={fadeLeft}
                        className="flex-shrink-0"
                    >
                        <motion.img
                            src={pp}
                            alt=""
                            className="w-full md:w-auto h-auto object-contain"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.div>
                    <motion.div
                        variants={container}
                        className="flex flex-col gap-5"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-inter font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[40px] md:leading-[48px] lg:leading-[55px] tracking-[0px] text-[#1A1A1A]"
                        >
                            Corporate & Executive Branding
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            custom={1}
                            className="font-inter mt-[10px] w-full max-w-[631px] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[26px] lg:leading-[28px] tracking-[0px] text-[#525252]"
                        >
                            Elevate your professional presence with custom branded templates that reflect your corporate identity
                        </motion.p>
                        <motion.div
                            variants={container}
                            className="flex flex-col gap-10 mt-[50px]"
                        >
                            {[
                                { img: box7, title: "Custom Brand Colors", desc: "Match your profile to your brand guidelines with custom color schemes and visual styling." },
                                { img: box8, title: "Company Logo Integration", desc: "Your corporate logo prominently displayed on your profile, maintaining brand consistency across all touchpoints." },
                                { img: box9, title: "Structured Design System", desc: "Maintain all Carteon functionality while expressing your unique brand identity" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    custom={i + 2}
                                    className="flex flex-col md:flex-row items-start md:items-center gap-4"
                                >
                                    <motion.div
                                        variants={fadeScale}
                                        custom={i}
                                        className="flex-shrink-0"
                                    >
                                        <img src={item.img} alt="" />
                                    </motion.div>
                                    <motion.div
                                        variants={container}
                                        className="flex flex-col gap-2"
                                    >
                                        <motion.h4
                                            variants={fadeUp}
                                            custom={i}
                                            className="font-inter font-semibold text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0px] text-[#1A1A1A] align-middle"
                                        >
                                            {item.title}
                                        </motion.h4>
                                        <motion.p
                                            variants={fadeUp}
                                            custom={i + 1}
                                            className="font-inter font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] tracking-[0px] text-[#525252] align-middle"
                                        >
                                            {item.desc}
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
            <motion.section
                id="pricing"
                className="w-full bg-white py-[60px] px-[20px] md:px-[40px] lg:px-[80px] h-auto md:h-[941px]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={container}
                    className="mt-[30px] flex flex-col justify-center items-center gap-4"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-inter font-semibold text-[32px] md:text-[36px] lg:text-[40px] leading-[48px] md:leading-[54px] lg:leading-[60px] tracking-[0px] text-black text-center align-middle"
                    >
                        Simple, Transparent Pricing
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        className="font-inter font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] md:leading-[50px] lg:leading-[60px] tracking-[0px] text-[#0A0F1A] text-center align-middle"
                    >
                        Start with one profile, upgrade when you need more professional identities
                    </motion.p>
                </motion.div>

                <div className="mt-[40px] md:hidden overflow-x-auto">
                    <table className="w-full border border-[#E5E7EB] rounded-[12px] overflow-hidden text-left">
                        <thead className="bg-[#000] font-inter text-[#fff]">
                            <tr>
                                <th className="p-3 text-[14px] font-bold">Features</th>
                                <th className="p-3 text-[14px] font-bold text-center">Standard</th>
                                <th className="p-3 text-[14px] font-bold text-center">Multi-Profile (Most Popular)</th>
                                <th className="p-3 text-[14px] font-bold text-center">Branded Template</th>
                            </tr>
                        </thead>

                        <tbody className="[&>tr:nth-child(even)]:bg-[#FAFAFA] text-[14px]">

                            <tr className="border-t border-[#E5E7EB]">
                                <td className="p-2 font-inter font-bold text-[14px] text-[#000]">Price (per year)</td>
                                <td className="text-center font-inter font-bold text-[14px] text-[#000]">Included with card purchase</td>
                                <td className="text-center font-inter font-bold text-[14px] text-[#000]">₦10,000</td>
                                <td className="text-center font-inter font-bold text-[14px] text-[#000]">₦18,000</td>
                            </tr>

                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">1 Default Profile</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>

                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Instant NFC tap sharing</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>

                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Profile photo/logo</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>

                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Contact information & links</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>

                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Mobile-optimized design</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>

                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Unlock 4 additional profiles</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center">✕</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Switch identities instantly</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center">✕</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">CEO, Consultant, Speaker, etc.</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center">✕</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Separate contact info per profile</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center">✕</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Priority support</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                                <td className="text-center">✕</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Custom brand colors</td>
                                <td className="text-center">✕</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Company logo integration</td>
                                <td className="text-center">✕</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Custom typography</td>
                                <td className="text-center">✕</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Professional identity</td>
                                <td className="text-center">✕</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-inter font-bold text-[14px] text-[#000]">Branded design elements</td>
                                <td className="text-center">✕</td>
                                <td className="text-center">✕</td>
                                <td className="text-center"><img src={mark1} className="mx-auto" /></td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 font-semibold">Get Started</td>
                                <td className="p-2 text-center">
                                    <button className="bg-[#1A1A1A] text-white px-3 py-2 rounded text-[12px]">
                                        Included
                                    </button>
                                </td>
                                <td className="p-2 text-center">
                                    <button className="bg-[#1A1A1A] text-white px-3 py-2 rounded text-[12px]">
                                        Upgrade
                                    </button>
                                </td>
                                <td className="p-2 text-center">
                                    <button className="bg-[#1A1A1A] text-white px-3 py-2 rounded text-[12px]">
                                        Included
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="hidden md:flex mt-[60px] flex-col md:flex-row gap-6 items-center justify-center">
                    <div className="w-full md:w-[363px] h-auto md:h-[539px] rounded-[20px] bg-white border-2 border-[#E5E7EB] p-5">
                        <h4 className="font-inter font-bold mt-[10px] text-[24px] leading-[32px] tracking-[0px] text-[#101828]">Standard</h4>
                        <p className="font-inter mt-[10px] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#525252]">Perfect for getting started</p>
                        <div className="mt-[40px]">
                            <h4 className="font-arimo font-bold text-[36px] leading-[40px] tracking-[0px] text-[#101828]">Included</h4>
                            <p className="font-inter mt-[10px] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#4A5565]">with card purchase</p>
                        </div>
                        <ul className="mt-[50px] flex flex-col gap-5">
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark1} alt="" />1 Default Profile
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark1} alt="" />Instant NFC tap sharing
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark1} alt="" />Contact information & links
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark1} alt="" />Profile photo/logo
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark1} alt="" />Mobile-optimized design
                            </li>
                        </ul>
                        <div className="w-full max-w-[323px] h-[48px] rounded-[8px] bg-[#F3F4F6] px-[24px] py-[12px] mt-[30px] mx-auto">
                            <a href="" className="font-inter font-semibold text-[16px] leading-[24px] tracking-[0px] text-[#6A7282] text-center block">
                                Included with Card
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-[408px] h-auto md:h-[575px] relative rounded-[24px] bg-white border-2 border-t-[2px] border-t-[#252C46] p-5 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                        <div className="w-[141px] h-[29px] flex items-center gap-1 px-[14px] py-[3px] absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-full bg-[#252C46]">
                            <div><img src={star} alt="" /></div>
                            <p className="font-arimo font-normal text-[14px] leading-[20px] tracking-[0px] text-white">Most Popular</p>
                        </div>
                        <h4 className="font-inter mt-[20px] font-bold text-[24px] leading-[32px] tracking-[0px] text-[#101828]">Multi-Profile</h4>
                        <p className="font-inter mt-[10px] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#525252]">For multi-faceted professionals</p>
                        <div className="mt-[40px]">
                            <h4 className="font-arimo font-bold text-[36px] leading-[40px] tracking-[0px] text-[#101828]">₦10,000</h4>
                            <p className="font-inter mt-[10px] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#4A5565]">per year</p>
                        </div>
                        <ul className="mt-[30px] flex flex-col gap-5">
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#1A1A1A]">
                                <img src={mark1} alt="" />Everything in Standard
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#1A1A1A]">
                                <img src={mark1} alt="" />Unlock 4 additional profiles
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#1A1A1A]">
                                <img src={mark1} alt="" />Switch identities instantly
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#1A1A1A]">
                                <img src={mark1} alt="" />CEO, Consultant, Speaker, etc.
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#1A1A1A]">
                                <img src={mark1} alt="" />Separate contact info per profile
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#1A1A1A]">
                                <img src={mark1} alt="" />Priority support
                            </li>
                        </ul>
                        <div className="w-full max-w-[373px] h-[48px] rounded-[8px] bg-[#252C46] px-[24px] py-[12px] mt-[22px] mx-auto">
                            <a href="" className="font-inter font-semibold text-[16px] leading-[24px] tracking-[0px] text-[#FFFFFF] text-center block">Upgrade to Multi-Profile</a>
                        </div>
                    </div>

                    <div className="w-full md:w-[363px] h-auto md:h-[539px] rounded-[20px] bg-white border-2 border-[#E5E7EB] p-5">
                        <h4 className="font-inter font-bold mt-[10px] text-[24px] leading-[32px] tracking-[0px] text-[#101828]">Branded Template</h4>
                        <p className="font-inter mt-[10px] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#525252]">Corporate & executive branding</p>
                        <div className="mt-[40px]">
                            <h4 className="font-arimo font-bold text-[36px] leading-[40px] tracking-[0px] text-[#101828]">₦18,000</h4>
                            <p className="font-inter mt-[10px] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#4A5565]">per year</p>
                        </div>
                        <ul className="mt-[30px] flex flex-col gap-5">
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark} alt="" />Everything in Standard
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark} alt="" />Custom brand colors
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark} alt="" />Company logo integration
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark} alt="" />Custom typography
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark} alt="" />Branded design elements
                            </li>
                            <li className="flex items-center gap-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#364153]">
                                <img src={mark} alt="" />Professional identity
                            </li>
                        </ul>
                        <div className="w-full max-w-[323px] h-[48px] rounded-[8px] bg-[#000000] px-[24px] py-[12px] mt-[20px] mx-auto">
                            <a href="" className="font-inter font-semibold text-[16px] leading-[24px] tracking-[0px] text-[#FFFFFF] text-center block">Included with Card</a>
                        </div>
                    </div>
                </div>
            </motion.section>
            <motion.section
                id="faq"
                className="h-auto w-full bg-[#F5F5F5] py-[60px] px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[80px]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={container}
                    className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-[30px] gap-8 lg:gap-0"
                >
                    <motion.div
                        variants={container}
                        className="flex flex-col gap-4 w-full lg:w-auto"
                    >
                        <motion.div
                            variants={fadeScale}
                            className="w-[68px] h-[35px] bg-white rounded-[100px] pt-[12px] pr-[16px] pb-[8px] pl-[16px] font-open-sans font-medium text-[14px] text-[#525252] leading-[100%] tracking-[0%]"
                        >
                            FAQs
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className="font-[Inter] w-full lg:w-[574px] font-semibold text-[36px] sm:text-[42px] md:text-[48px] text-[#1A1A1A] leading-[1.2] sm:leading-[64px] md:leading-[74px] tracking-[0%]"
                        >
                            Frequently Asked Question
                        </motion.h2>
                    </motion.div>
                    <motion.div
                        variants={container}
                        className="w-full lg:w-[442px] flex flex-col gap-4"
                    >
                        <motion.p
                            variants={fadeUp}
                            custom={1}
                            className="font-[Inter] font-normal text-[16px] sm:text-[18px] text-[#5A5A59] leading-[1.2] sm:leading-[100%] tracking-[0%]"
                        >
                            Find quick answers to the most common questions about our services, process, and support
                        </motion.p>
                        <motion.a
                            variants={fadeUp}
                            custom={2}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#"
                            className="mt-[20px] w-[151px] h-[51px] bg-[#252C46] rounded-[80px] py-[16px] px-[32px] font-[Inter] font-semibold text-[16px] text-white leading-[100%] flex items-center gap-[10px]"
                        >
                            View all <img src={arrowright} alt="" />
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={container}
                    className="mt-[60px] flex flex-col gap-[16px]"
                >
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={fadeScale}
                            custom={index}
                            className="bg-white rounded-[12px] px-4 sm:px-6 md:px-6 py-5 cursor-pointer transition-all"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div
                                className="flex items-center justify-between"
                                onClick={() => toggle(index)}
                            >
                                <motion.h3
                                    variants={fadeUp}
                                    custom={index}
                                    className="font-[Inter] font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[#131313] leading-[28px] sm:leading-[30px] md:leading-[30px]"
                                >
                                    {faq.question}
                                </motion.h3>

                                <motion.div
                                    variants={fadeScale}
                                    custom={index}
                                    className="w-[36px] h-[36px] flex items-center justify-center rounded-full border border-[#E5E5E5] bg-white"
                                >
                                    {active === index ? <Minus size={18} /> : <Plus size={18} />}
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {active === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="mt-4 overflow-hidden"
                                    >
                                        <p className="w-full sm:w-[90%] md:w-[929px] font-[Inter] font-normal text-[16px] sm:text-[18px] text-[#525252] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
            <motion.section
                className="h-auto w-full bg-[#1A1A1A] py-[60px] px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[80px]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={container}
                    className="flex flex-col justify-center items-center gap-5 mt-[40px]"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-inter w-full sm:w-[90%] md:w-[806px] font-bold text-[36px] sm:text-[42px] md:text-[51px] leading-[42px] sm:leading-[50px] md:leading-[60px] tracking-[0px] text-white text-center align-middle"
                    >
                        Present Your Executive Identity Today
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        className="font-inter w-full sm:w-[85%] md:w-[690px] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[22px] sm:leading-[26px] md:leading-[28px] tracking-[0px] text-[#A2B7DB] text-center align-middle"
                    >
                        One tap, multiple professional identities, zero downloads. Join the future of networking.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        custom={2}
                        className="mt-[40px]"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#"
                            className="w-full sm:w-[60%] md:w-[321px] h-[60px] rounded-[8px] bg-white shadow-[0px_10px_25px_-3px_rgba(255,255,255,0.3),0px_4px_6px_-2px_rgba(255,255,255,0.1)] pt-[16px] pr-[32px] pb-[16px] pl-[32px] font-inter font-medium text-[14px] sm:text-[15px] md:text-[15.3px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[0px] text-[#1A1A1A] text-center align-middle block mx-auto"
                        >
                            Order Your Card Now
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.section>
            <Footer />
        </div>
    );
};

export default LandingPage;