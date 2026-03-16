import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import mail from "../../assets/mail.png";


const Footer = () => {
    return (
        <section className="h-[464px] w-full bg-[#252C46] py-[60px] px-[80px]">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-[10px]">
                        <img src={logo} alt="Carteon logo" className="w-[31px] h-[34px]" />
                        <h4 class="font-inter font-semibold text-[24px] leading-[100%] tracking-[0px] text-white">Carteon</h4>
                    </div>
                    <p className="w-[391px] font-inter font-normal text-[16px] leading-[24px] tracking-[0px] text-[#99A1AF]">Executive NFC smart cards for the modern professional. One card, multiple identities.</p>
                    <div className="flex items-center gap-8">
                        <a href="">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="">
                            <img src={mail} alt="" />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="font-inter font-normal text-[18px] leading-[28px] tracking-[0px] text-white">Product</h4>
                    <ul className=" mt-[10px] flex flex-col gap-4">
                        <li>
                            <a href="#feature" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Features</a>
                        </li>
                        <li>
                            <a href="#pricing" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Pricing</a>
                        </li>
                        <li>
                            <a href="#feature" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">How It Works</a>
                        </li>
                        <li>
                            <a href="#feature" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-inter font-normal text-[18px] leading-[28px] tracking-[0px] text-white">Company</h4>
                    <ul className=" mt-[10px] flex flex-col gap-4">
                        <li>
                            <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">About</a>
                        </li>
                        <li>
                            <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Blog</a>
                        </li>
                        <li>
                            <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Careers</a>
                        </li>
                        <li>
                            <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-[40px]">
                    <h4 class="font-inter font-normal text-[18px] leading-[28px] tracking-[0px] text-white">Legal</h4>
                    <ul className=" mt-[10px] flex flex-col gap-4">
                        <li>
                            <a href="#feature" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#pricing" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#feature" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Cookie Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-[40px]">
                    <h4 class="font-inter font-normal text-[18px] leading-[28px] tracking-[0px] text-white">Support</h4>
                    <ul className=" mt-[10px] flex flex-col gap-4">
                        <li>
                            <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Help Center</a>
                        </li>
                        <li>
                            <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Contact Support</a>
                        </li>
                        <li>
                            <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Order Status</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-[1207px] h-[60px] mt-[40px] flex items-center justify-between border-t border-[#F5F5F58C] pt-[20px] pb-[20px] text-sm text-gray-600">
                <p class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">© {new Date().getFullYear()} Carteon. All rights reserved.</p>

                <div className="flex items-center gap-4">
                    <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Privacy</a>
                    <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Terms</a>
                    <a href="#" class="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#99A1AF]">Cookies</a>
                </div>
            </div>

        </section>
    )
}

export default Footer;