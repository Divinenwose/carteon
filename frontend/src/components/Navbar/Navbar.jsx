import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="w-full h-[80px] flex justify-between bg-white py-[40px] px-[80px] fixed top-0 left-0 right-0 z-999999">
            <div className="flex items-center gap-[10px]">
                <img src={Logo} alt="Carteon-logo" className="w-[31px] h-[34px]" />
                <span className="font-inter font-semibold text-[24px] text-black leading-[100%] tracking-[0%]">
                    Carteon
                </span>
            </div>
            <ul className="flex items-center gap-10">
                <li>
                    <a
                        href="#features"
                        className="font-outfit font-normal text-[18px] leading-[100%] tracking-[0%] text-center text-[#252C46]"
                    >
                        Features
                    </a>
                </li>
                <li>
                    <a
                        href="#how-it-works"
                        className="font-outfit font-normal text-[18px] leading-[100%] tracking-[0%] text-center text-[#252C46]"
                    >
                        How It Works
                    </a>
                </li>
                <li>
                    <a
                        href="#pricing"
                        className="font-outfit font-normal text-[18px] leading-[100%] tracking-[0%] text-center text-[#252C46]"
                    >
                        Pricing
                    </a>
                </li>
                <li>
                    <a
                        href="#faq"
                        className="font-outfit font-normal text-[18px] leading-[100%] tracking-[0%] text-center text-[#252C46]"
                    >
                        FAQ
                    </a>
                </li>
            </ul>
            <div className="flex items-center">
                <a
                    href=""
                    className="w-[190px] h-[48px] bg-[#252C46] rounded-[40px] py-[15px] px-[24px] font-outfit font-semibold text-[18px] text-white leading-[100%] tracking-[0%]"
                >
                    Get Your Carteon
                </a>
            </div>
        </div>
    );
};

export default Navbar;