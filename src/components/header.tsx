"use client";



import { usePathname } from "next/navigation";
import InnerHeader from "./header-inner";
export default function Header() {
    const pathname = usePathname();
    if (pathname === "/")
        return(
            <></>
        )
    return(
        <InnerHeader/>
    )
}