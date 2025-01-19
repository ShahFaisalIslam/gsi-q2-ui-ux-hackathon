"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerItems, IHeaderItem } from "./headerData";
import Link from "next/link";
import Logo from "./logo";


export default function InnerHeader() {
    const pathname = usePathname();
    let currentItem: IHeaderItem = {
        name: "404",
        url: pathname,
        banner: "404 Error"
    };
    for (const item of headerItems) {
        if (item.url === pathname)
            currentItem = item;
    }
    return (
        <div className="flex flex-col items-center justify-center relative">
            <Image src="/unsplash-4ycv3Ky1ZZU.png" alt="Behind" width={1920} height={410}
                className="absolute -z-10" />
            <div className="flex items-center justify-center h-[5.625rem] bg-[--black-ododod] text-[white] w-full">
                <div className="w-full max-w-[82.5rem] flex items-center">
                    {/* Logo */}
                    <div className=" mr-[21.375rem]">
                        <Logo />
                    </div>
                    {/* Header Items */}
                    <ul className="flex items-center gap-8 mr-[16.0625rem]">
                        {headerItems.map((headerItem: IHeaderItem, index: number) => {
                            if (headerItem.url !== currentItem.url)
                                return (
                                    <li key={index}><Link href={headerItem.url}>{headerItem.name}</Link></li>
                                )
                            return (
                                <li key={index}><Link href={headerItem.url} className="text-[--primary-1]">{headerItem.name}</Link></li>
                            )
                        })}
                    </ul>
                    {/* Icons */}
                </div>
            </div>
            <div className="mt-[6.75rem] text-center text-white">
                <h2 className="text-[3rem] font-bold">{currentItem.banner || "Our Menu"}</h2>
                <p className="text-[1.25rem]">Home &gt; <span className="text-[--primary-1]">{currentItem.name || "Menu"}</span></p>
            </div>
        </div>
    )
}   