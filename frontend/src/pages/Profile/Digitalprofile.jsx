import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import bg from "../../assets/bg.png";
import crown from "../../assets/crown.png";
import call from "../../assets/call.png";
import chatt from "../../assets/chatt.png";
import chat from "../../assets/chat.png";
import head from "../../assets/head.png";
import arrrow from "../../assets/arrrow.png";
import logo from "../../assets/logo.png";
import { Twitter, Linkedin, Github, Globe, Instagram } from "lucide-react";


const DigitalCard = () => {
    const { identifier } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const getLinkIcon = (type) => {
        switch (type.toLowerCase()) {
            case "twitter":
                return <Twitter size={16} />;
            case "instagram":
                return <Instagram size={16} />;
            case "linkedin":
                return <Linkedin size={12} />;
            case "github":
                return <Github size={16} />;
            case "website":
            case "portfolio":
                return <Globe size={16} />;
            default:
                return null;
        }
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}api/v1/profiles/${identifier}`
                );

                setProfile(res.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [identifier]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile) {
        return <div>Profile not found</div>;
    }
    return (
        <div className="w-full  min-h-screen flex justify-center">
            <div className="w-full max-w-md relative ">
                <div className="w-full -mt-[100px]">
                    <img
                        src={profile.identity.photoUrl}
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
                                <div className="flex items-center justify-between">
                                    <img
                                        src={crown}
                                        className="w-[20px] h-[20px]"
                                        alt="Crown-icon"
                                    />

                                    <span className="inline-flex items-center px-4 py-1 bg-white rounded-full border border-gray-200 shadow-sm font-inter font-medium text-[12px] text-[#334155]">
                                        {profile.identity.title}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <h2 className="font-inter font-bold text-[24px] text-black leading-[27.09px] tracking-[0%]">{profile.identity.fullName}</h2>
                                        <p className="font-inter font-normal text-[14px] text-black leading-[27px] tracking-[0%] align-middle">{profile.identity.title}</p>
                                        <p className="font-inter font-normal text-[14px] text-black leading-[27px] tracking-[0%] align-middle">{profile.identity.company}</p>
                                    </div>

                                    <p className="font-inter font-normal mt-[22px] text-[13.55px] text-black w-[303px] leading-[18.62px] tracking-[0%]">
                                        {profile.identity.bio}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-15">
                            <div className="w-[104px] h-[60px] bg-[#F9FAFF] gap-2 rounded-[7px] p-3 flex flex-col items-center">
                                <div>
                                    <img src={call} alt="" />
                                </div>
                                <a href={`tel:${profile.contactInfo.phone}`} className="font-inter font-medium text-[11.85px] text-[#252C46] leading-[16.93px] tracking-[0%] text-center align-middle">
                                    Call
                                </a>
                            </div>
                            <div className="w-[104px] h-[60px] bg-[#F9FAFF] gap-2 rounded-[7px] p-3 flex flex-col items-center">
                                <div>
                                    <img src={chatt} alt="" />
                                </div>
                                <a href={`mailto:${profile.contactInfo.email}`} className="font-inter font-medium text-[11.85px] text-[#252C46] leading-[16.93px] tracking-[0%] text-center align-middle" >
                                    Email
                                </a>
                            </div>
                            <div className="w-[104px] h-[60px] bg-[#F9FAFF] gap-2  rounded-[7px] p-3 flex flex-col items-center">
                                <img src={chat} alt="" />
                                <a href={`sms:${profile.contactInfo.phone}`} className="font-inter font-medium text-[11.85px] text-[#252C46] leading-[16.93px] tracking-[0%] text-center align-middle">
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
                        <div className="mt-5">
                            <div className="flex flex-col gap-2">
                                {profile.links.map((link) => (
                                    <a
                                        key={link._id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-[44px] flex justify-between items-center bg-[#F9FAFF] p-[8.47px] hover:bg-gray-100 transition"
                                    >
                                        <div className="flex items-center gap-2">
                                            {getLinkIcon(link.type)}

                                            <span className="font-inter font-medium text-[11px] text-[#252C46]">
                                                {link.type}
                                            </span>
                                        </div>

                                        <div>
                                            <img src={arrrow} alt="" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] flex flex-col gap-4">
                        <button className="w-full h-[48px] bg-[#252C46] rounded-[8px] py-[14px] px-[14px] font-inter font-medium text-[14px] text-white leading-[20px] tracking-[0px] text-center">
                            Share Your Contact
                        </button>
                        <button
                            onClick={() => navigate("/")}
                            className="w-full h-[48px] bg-white rounded-[8px] border border-[#0000001A] [border-top:1px_solid_#0000001A] py-[14px] px-[14px] font-inter font-medium text-[14px] text-[#0A0A0A] leading-[20px] tracking-[0px] text-center"
                        >
                            Get Your Own Carteon Card Now
                        </button>
                        <div className="w-full h-[77px] flex flex-col gap-3 py-[17px] [border-top:1px_solid_#0000001A]">
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
