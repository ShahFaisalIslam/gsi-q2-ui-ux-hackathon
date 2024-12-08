import { faFacebookF, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterBottom() {
    return (
        <div className="bg-[--primary-1] h-[6.1875rem] flex justify-center pt-8 pb-[2.125rem]">
            <div className="flex items-center justify-between w-full max-w-[82.375rem]">
                {/* Copyright notice */}
                <p className="text-white leading-normal">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                {/* social media handles */}
                <ul className="flex items-center gap-[0.87125rem]">
                    <li><div className="bg-white rounded-[0.125rem] w-9 h-[2.0625rem] flex items-center justify-center text-[--gray-2]"><FontAwesomeIcon icon={faFacebookF} /></div></li>
                    <li><div className="bg-white rounded-[0.125rem] w-9 h-[2.0625rem] flex items-center justify-center text-[--gray-2]"><FontAwesomeIcon icon={faTwitter} /></div></li>
                    <li><div className="bg-white rounded-[0.125rem] w-9 h-[2.0625rem] flex items-center justify-center text-[--gray-2]"><FontAwesomeIcon icon={faInstagram} /></div></li>
                    <li><div className="bg-white rounded-[0.125rem] w-9 h-[2.0625rem] flex items-center justify-center text-[--primary-1]"><FontAwesomeIcon icon={faYoutube} /></div></li>
                    <li><div className="bg-white rounded-[0.125rem] w-9 h-[2.0625rem] flex items-center justify-center text-[--gray-2]"><FontAwesomeIcon icon={faPinterest} /></div></li>
                </ul>
            </div>
        </div>
    );
}