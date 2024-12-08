import { ClockClockwise } from "@phosphor-icons/react/dist/ssr";
import FooterBottom from "./footer-bottom";
import FooterSubscribe from "./footer-subscribe";
import Image from "next/image";

type postData = {
    id: number;
    title: string;
    date: string;
    image: string;
};

const data: postData[] = [{
    id: 1,
    title: "Keep Your Business",
    date: "February 8, 2022",
    image: "/hero/blog-thumbnail1.png"
}, {
    id: 2,
        title: "Keep Your Business",
    date: "February 8, 2022",
    image: "/hero/blog-thumbnail2.png"
}, {
    id: 3,
    title: "Keep Your Business",
    date: "February 8, 2022",
    image: "/hero/blog-thumbnail3.png"
}];

export default function HeroFooter() {
    return (
        <div className="flex flex-col text-white">
            <div className="bg-[--black-ododod] h-[42.1875rem] flex flex-col items-center gap-14">
                {/* Footer Subscribe */}
                <FooterSubscribe />
                {/* Footer Items */}
                <div className="flex gap-[7.3975rem] w-full max-w-[82.5rem] pb-14">
                    <div className="flex flex-col w-[19.5rem]">
                        <h6 className="text-[1.25rem] font-bold mb-[1.99375rem]">About Us.</h6>
                        <p className="mb-[1.495625rem]">orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
                        {/* Opening Hours */}
                        <div className="flex gap-[1.0625rem] items-center">
                            {/* Clock */}
                            <div className="flex items-center justify-center w-[4.826875rem] h-[4.424375rem] bg-[--primary-1] text-white">
                                <ClockClockwise className="w-[2.475625rem] h-[2.458125rem]" />
                            </div>
                            {/* Text */}
                            <div className="flex flex-col gap-[0.125rem]">
                                <p className="text-[1.125rem]">Opening Houres</p>
                                <p className="text-[0.875rem]">Mon - Sat(8.00 - 6.00)</p>
                                <p className="text-[0.875rem]">Sunday - Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[9.0275rem]">
                        <div>
                            <h6 className="text-[1.25rem] font-bold mb-[1.495625rem]">Useful Links</h6>
                            <ul className="flex flex-col gap-7">
                                <li>About</li>
                                <li>News</li>
                                <li>Patners</li>
                                <li>Team</li>
                                <li>Menu</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-[1.25rem] font-bold mb-[1.495625rem]">Help?</h6>
                            <ul className="flex flex-col gap-7">
                                <li>FAQ</li>
                                <li>Term & Condition</li>
                                <li>Reporting</li>
                                <li>Documentation</li>
                                <li>Support Policy</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-[1.25rem] font-bold mb-[1.495625rem]">Recent Post</h6>
                            <ul className="flex flex-col  gap-[0.875rem]">
                                {data.map((__data : postData)=>{
                                    return (
                                        <div key={__data.id} className="flex gap-[1.003125rem] w-[17.114375rem]">
                                            <Image src={__data.image} alt="blog thumbnail" width={59} height={48}/>
                                            <div className="flex flex-col gap-[0.31125rem]">
                                                <p className="opacity-[49%] text-[0.875rem]">{__data.date}</p>
                                                <p>{__data.title}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Copyright disclaimer and social media handles */}
            <FooterBottom />
        </div >
    );
}