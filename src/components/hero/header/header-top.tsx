import Logo from "@/components/logo";
import { Handbag, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link";


export default function HeaderTop() {
    return (
        <div className="flex flex-col items-center justify-center h-[5.625rem] bg-transparent text-[white] w-full">
            {/* Logo */}
            <Logo />
            <div className="w-full max-w-[82.5rem] flex items-center justify-between">
                {/* Header Items */}
                <ul className="flex items-center gap-8">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/menu"}>Menu</Link></li>
                    <li><Link href={"/blog"}>Blog</Link></li>
                    <li>Pages</li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/shop"}>Shop</Link></li>
                    <li>Contact</li>
                </ul>
                <div className="flex items-center gap-2">
                    <div className="flex items-center relative w-full max-w-[19.375rem]">
                        <input type="search" placeholder="Search..."
                            className="pl-[1.625rem] relative w-full  h-[3.375rem] rounded-[1.6875rem] focus-within:outline-none border border-[--primary-1] bg-transparent"
                        />
                        <MagnifyingGlass  className="text-white absolute right-[1.625rem] w-6 h-6" />
                    </div>
                    <Handbag />
                </div>
            </div>
        </div>

    );
}