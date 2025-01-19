import Image from "next/image";
import Link from "next/link";

interface IChefCard {
  name: string,
  imageUrl: string,
  position: string
};

export default async function Home() {
  const chefCardData = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/chef`, { cache: "no-store" });
  const chefCardDataJson = await chefCardData.json();

  return (
    <div className="min-h-screen px-[18.75rem] py-[7.5rem]">
      <div className="flex gap-6 flex-wrap">
        {chefCardDataJson.map((chefCard: IChefCard, index: number) => (
          <Link key={index} href={`/chef/${index}`}>
            <div key={index} className="flex flex-col items-center gap-[0.5519rem] w-[19.5rem]">
              <Image src={chefCard.imageUrl} width={312} height={379.17} alt={chefCard.name} />
              <div className="flex flex-col items-center gap-1">
                <h6 className="font-bold text-[20px] leading-[28px] text-[#333333]">{chefCard.name}</h6>
                <p className="text-[18px] leading-[26px]">{chefCard.position}</p>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}
