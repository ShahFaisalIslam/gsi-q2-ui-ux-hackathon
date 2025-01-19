import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import { headerItems } from "../../data/header";


export default function HeroHeader() {
    return (
        <div className="flex flex-col items-center justify-center h-[5.625rem] bg-transparent text-[white] w-full">
            {/* Logo */}
            <Logo />
            <div className="w-full max-w-[82.5rem] flex items-center justify-between">
                {/* Header Items */}
                <ul className="flex gap-8">
                    {headerItems.map((headerItem,index) =>{
                        if (headerItem.url !== "/")
                            return(
                                <li key={index}><Link href={headerItem.url}>{headerItem.name}</Link></li>
                            )
                        else
                            return(
                                <li key={index} className="flex flex-col items-center"><Link href={headerItem.url}>{headerItem.name}</Link><p className="h-[7px] w-[7px] rounded-[50%] bg-[--primary-1]"></p></li>
                        )
                    })}
                </ul>
                <div className="flex items-center gap-2">
                    <div className="flex items-center relative w-full max-w-[19.375rem]">
                        <input type="search" placeholder="Search..."
                            className="pl-[1.625rem] relative w-full h-[3.375rem] rounded-[1.6875rem] focus-within:outline-none border border-[--primary-1] bg-transparent"
                        />
                        <Image src="/icon/24/magnifying-glass.png" width={24} height={24} alt="" className="absolute right-[1.625rem]" />
                    </div>
                    <Image src="/icon/24/handbag.png" width={24} height={24} alt="" />
                </div>
            </div>
        </div>

    );
}