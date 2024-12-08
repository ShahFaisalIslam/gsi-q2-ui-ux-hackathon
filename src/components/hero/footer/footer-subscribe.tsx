export default function FooterSubscribe() {
    return (
        <div className="w-full max-w-[82.5rem] mt-[7.5rem]">
            <div className="w-full max-w-[73.0625rem] ml-[5.0625rem] flex flex-wrap justify-between border-b border-b-[--primary-1]">
                {/* Call for action */}
                <div className="flex flex-col gap-[0.9975rem] text-white mb-[1.995rem]">
                    <h4 className="text-[2rem] font-bold"><span className="text-[--primary-1]">St</span>ill You Need Our Support?</h4>
                    <p>Don&apos;t wait make a smart &amp; logical quote here. It&apos;s pretty easy.</p>
                </div>
                <div className="w-[28.6875rem] h-[3.49125rem] relative">
                    <input type="email" placeholder="Enter Your Email"
                        className="relative w-full pl-6 py-4 rounded  bg-[--primary-1] text-white placeholder:text-white/60"
                    />
                    <button
                        className="absolute z-10 right-0 px-6 py-4 rounded bg-white text-[--primary-1]"
                    >
                        Subscribe Now</button>
                </div>
            </div>
        </div>
    );
}