import Link from "next/link";

export default function Home() {
  return (
      <div className="px-[18.75rem] py-[7.5rem]">
        <div className="flex flex-col items-center gap-8 text-center">
          <h3 className="text-8xl leading-[6.5rem] text-[--primary-1] font-bold">404</h3>
          <div className="flex flex-col items-center gap-6 text-center">
            <h4 className="text-4xl text-[32px] font-bold">Oops! Looks like something went wrong.</h4>
            <p className="text-[18px] leading-[26px]">Page Cannot be found! we&apos;ll have it figured out in no time.
            Menwhile, cheek out these fresh ideas:</p>
          </div>
          <Link href="/"><button className="bg-[--primary-1] text-white px-12 py-4 rounded-md">Go to home</button></Link>
        </div>
      </div>
  );
}
