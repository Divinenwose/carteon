import React from "react";
import adaeze from "../../assets/adaeze.png"
import bg from "../../assets/bg.png";
import crown from "../../assets/crown.png";
import call from "../../assets/call.png";
import chatt from "../../assets/chatt.png";
import chat from "../../assets/chat.png";
import head from "../../assets/head.png";
import arrrow from "../../assets/arrrow.png";
import nexus from "../../assets/nexus.png";
import linked from "../../assets/linked.png";
import port from "../../assets/port.png";
import logo from "../../assets/logo.png";

const DigitalCard = () => {
    return (
        <div className="w-full  min-h-screen flex justify-center">
            <div className="w-full max-w-md relative ">
                <div className="w-full -mt-[100px]">
                    <img
                        src={adaeze}
                        alt="profile"
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                <div
                    className="absolute top-80 right-0 left-0 px-4 pt-3 pt-5 bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col  gap-3">
                                <div className="flex gap-22">
                                    <div>
                                        <img src={crown} alt="Crown-icon" />
                                    </div>
                                    <div>
                                        <select
                                            name="CEO"
                                            id="CEO"
                                            className="w-[83px] h-[34px] bg-white rounded-full border border-gray-200 shadow-sm text-sm  font-inter font-medium text-[12px] text-[#334155] leading-[20px] tracking-[0%] text-center align-middle"
                                        >
                                            <option value="CEO">CEO</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <h2 className="font-inter font-bold text-[17.27px] text-black leading-[27.09px] tracking-[0%]">Adaeze Okonkwo</h2>
                                        <p className="font-inter font-normal text-[14px] text-black leading-[27px] tracking-[0%] align-middle">CEO & Founder</p>
                                        <p className="font-inter font-normal text-[14px] text-black leading-[27px] tracking-[0%] align-middle">Nexus Ventures Africa</p>
                                    </div>

                                    <p className="font-inter font-normal mt-[22px] text-[13.55px] text-black w-[303px] leading-[18.62px] tracking-[0%]">
                                        Building Africa's next generation of technology infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-15">
                            <div className="w-[104px] h-[60px] bg-[#F9FAFF] gap-2 rounded-[7px] p-3 flex flex-col items-center">
                                <div>
                                    <img src={call} alt="" />
                                </div>
                                <a href="tel:+2340000000000" className="font-inter font-medium text-[11.85px] text-[#252C46] leading-[16.93px] tracking-[0%] text-center align-middle">
                                    Call
                                </a>
                            </div>
                            <div className="w-[104px] h-[60px] bg-[#F9FAFF] gap-2 rounded-[7px] p-3 flex flex-col items-center">
                                <div>
                                    <img src={chatt} alt="" />
                                </div>
                                <a href="mailto:email@example.com" className="font-inter font-medium text-[11.85px] text-[#252C46] leading-[16.93px] tracking-[0%] text-center align-middle" >
                                    Email
                                </a>
                            </div>
                            <div className="w-[104px] h-[60px] bg-[#F9FAFF] gap-2  rounded-[7px] p-3 flex flex-col items-center">
                                <img src={chat} alt="" />
                                <a href="sms:+2340000000000" className="font-inter font-medium text-[11.85px] text-[#252C46] leading-[16.93px] tracking-[0%] text-center align-middle">
                                    Message
                                </a>
                            </div>
                        </div>
                        <div className="mt-[30px] w-[100%] h-[47px]  bg-[#252C46] gap-[10px] rounded-[8px] py-[14px] px-[20px]">
                            <a
                                href="/contact.vcf"
                                download
                                className="flex items-center justify-center gap-4 font-inter font-semibold text-[11.9px] text-white leading-[20px] tracking-[0%] text-center align-middle"

                            >
                                <img src={head} alt="" />Save Contact
                            </a>

                        </div>
                    </div>
                    <div className="mt-7 px-2">
                        <h3 className="font-inter font-semibold text-[20px] text-[#1A1A1A] leading-[22px] tracking-[0%] align-middle">Links</h3>

                        <div >
                            <div className="flex flex-col gap-2">
                                <div className="w-[100%] mt-[20px] h-[44px] flex justify-between bg-[#F9FAFF] p-[8.47px]">
                                    <a href="#" className="flex items-center gap-2 font-inter font-medium text-[10.07px] text-[#252C46] leading-[16.93px] tracking-[0%] align-middle" >
                                        <img src={nexus} alt="" /> nexusventures.africa
                                    </a>
                                    <div>
                                        <img src={arrrow} alt="" />
                                    </div>
                                </div>
                                <div className="w-[100%] h-[44px] flex justify-between bg-[#F9FAFF] p-[8.47px]">
                                    <a href="#" className="flex items-center gap-2 font-inter font-medium text-[10.07px] text-[#252C46] leading-[16.93px] tracking-[0%] align-middle">
                                        <img src={linked} alt="" /> linkedin.com/in/adaeze
                                    </a>
                                    <div>
                                        <img src={arrrow} alt="" />
                                    </div>
                                </div>
                                <div className="w-[100%] h-[44px] flex justify-between bg-[#F9FAFF] p-[8.47px]">
                                    <a href="#" className="flex items-center gap-2 font-inter font-medium text-[10.07px] text-[#252C46] leading-[16.93px] tracking-[0%] align-middle">
                                        <img src={port} alt="" /> Portfolio & Media
                                    </a>
                                    <div>
                                        <img src={arrrow} alt="" />
                                    </div>
                                </div>
                                <div className="w-[100%] h-[44px] flex justify-between bg-[#F9FAFF] p-[8.47px]">
                                    <a href="#" className="flex items-center gap-2 font-inter font-medium text-[10.07px] text-[#252C46] leading-[16.93px] tracking-[0%] align-middle">
                                        <img src={port} alt="" /> Portfolio & Media
                                    </a>
                                    <div>
                                        <img src={arrrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] flex flex-col gap-4">
                        <button className="w-full h-[48px] bg-[#252C46] rounded-[8px] py-[14px] px-[14px] font-inter font-medium text-[14px] text-white leading-[20px] tracking-[0px] text-center">
                            Share Your Contact
                        </button>
                        <button className="w-full h-[48px] bg-white rounded-[8px] border border-[#0000001A] [border-top:1px_solid_#0000001A] py-[14px] px-[14px] font-inter font-medium text-[14px] text-[#0A0A0A] leading-[20px] tracking-[0px] text-center">
                            Get Your Own Carteon Card Now
                        </button>
                        <div className="w-full h-[77px] flex flex-col gap-3 pt-[17px] [border-top:1px_solid_#0000001A]">
                            <p className="font-inter font-normal text-[14px] text-[#737373] leading-[20px] tracking-[0px] text-center">
                                Powered by
                            </p>
                            <div className="flex items-center gap-3 justify-center">
                                <div><img src={logo} alt="" className="w-[31px] h-[31px]" /></div>
                                <p className="font-inter font-semibold text-[24px] text-[#252C46] leading-[100%] tracking-[0%]">Carteon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalCard;
