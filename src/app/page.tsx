import HeroFooter from "@/components/hero/footer/footer";
import HeroHeader from "@/components/hero/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0d0d0df2] min-h-[59.375rem]">
      <div className="relative h-[59.375rem]">
        <HeroHeader/>
        <Image src="/hero/bg.png" width={2559} height={3839} className="-z-10 absolute object-cover top-0 h-[59.375rem] w-[120rem]" alt=""/>
      </div>
      <HeroFooter/>
    </div>
  );
}
