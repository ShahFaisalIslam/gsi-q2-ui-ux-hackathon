import Image from "next/image";
import Link from "next/link";

interface IFoodCard {
  name: string,
  imageUrl: string,
  price: number,
  originalPrice: number
};

export default async function Home() {
  const foodCardData = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/food`, { cache: "no-store" });
  const foodCardDataJson = await foodCardData.json();

  return (
      <div className="min-h-screen px-[18.75rem] py-[7.5rem]">
        <div className="flex gap-6 flex-wrap">
          {foodCardDataJson.map((foodCard: IFoodCard, index: number) => (
            <Link key={index} href={`/shop/${index}`}>
              <div className="flex flex-col gap-2 w-[19.5rem]">
                <Image src={foodCard.imageUrl} width={312} height={267} alt={foodCard.name} />
                <div className="flex flex-col gap-1">
                  <h6 className="font-bold text-[18px] leading-[26px] text-[#333333]">{foodCard.name}</h6>
                  <div className="flex items-center gap-2">
                    <p className="text-[#FF9F0D]">${foodCard.price}</p>
                    <del className="text-[#828282]">${foodCard.originalPrice}</del>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
  );
}
