import { MagnifyingGlass, Tote, User } from "@phosphor-icons/react/dist/ssr"
import Logo from "../logo";
import Link from "next/link";

export default function HeaderTop() {
    return (
        <div className="flex items-center justify-center h-[5.625rem] bg-[--black-ododod] text-[white] w-full">
            <div className="w-full max-w-[82.5rem] flex items-center">
                {/* Logo */}
                <div className=" mr-[21.375rem]">
                    <Logo />
                </div>
                {/* Header Items */}
                <ul className="flex items-center gap-8 mr-[16.0625rem]">
                    <li className="text-[--primary-1]"><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/menu"}>Menu</Link></li>
                    <li><Link href={"/blog"}>Blog</Link></li>
                    <li>Pages</li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/shop"}>Shop</Link></li>
                    <li>Contact</li>
                </ul>
                {/* Icons */}
                <ul className="flex items-center gap-4">
                    <MagnifyingGlass />
                    <User />
                    <Tote />
                </ul>
            </div>
        </div>

    );
}