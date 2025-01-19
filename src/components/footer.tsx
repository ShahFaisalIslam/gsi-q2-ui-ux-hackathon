"use client";



import { usePathname } from "next/navigation";
import InnerFooter from "./footer/footer-inner";
export default function Footer() {
    const pathname = usePathname();
    if (pathname === "/")
        return(
            <></>
        )
    return(
        <InnerFooter/>
    )
}