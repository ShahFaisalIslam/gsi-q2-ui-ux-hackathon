import Image from "next/image";
import HeaderTop from "./header-top";

type headerParams = {
    title: string;
    tree: string
};

export default function Header({title,tree}:headerParams) {

    return (
        <div className="flex flex-col items-center justify-center relative">
            <Image src="/unsplash-4ycv3Ky1ZZU.png" alt="Behind" width={1920} height={410}
            className="absolute z-[-1]"/>
            <HeaderTop/>
            <div className="mt-[6.75rem] text-center text-white">
                <h2 className="text-[3rem] font-bold">{title || "Our Menu"}</h2>
                <p className="text-[1.25rem]">Home &gt; <span className="text-[--primary-1]">{tree || "Menu"}</span></p>
            </div>
        </div>
    )
}   