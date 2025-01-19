import Image from "next/image";

interface IFoodCard {
  name: string,
  imageUrl: string,
  available: boolean,
  description: string,
  price: number,
  category: string,
  tags: string[]
};


export default async function Home({params}:{params: {id:string}}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/food?id=${params.id}`,{cache: "no-store"});
  const data : IFoodCard = await response.json();

  return (
      <div className="min-h-screen px-[18.75rem] py-[7.5rem]">
        <div className="flex gap-[3.4375rem]">
          <Image src={data.imageUrl} width={647} height={596} alt={data.name}/>
          <div className="flex flex-col items-start">
            {data.available ? (
            <div className="px-[1.0625rem] py-[0.1875rem] bg-[#ff9f0d] text-white rounded-md text-sm mb-2">In Stock</div>
            ) : (
              <div className="px-[1.0625rem] py-[0.1875rem] bg-[#333333] text-white rounded-md text-sm mb-2">Out of Stock</div>
              )}
            <h2 className="text-5xl leading-[3.5rem] text-[#333333] mb-6 font-bold">{data.name}</h2>
            <p className="text-lg leading-[1.625rem] text-[#4f4f4f] mb-8">{data.description}</p>
            <hr className="w-full mb-8"/>
            <h4 className="font-bold text-4xl text-[2rem] text-[#333333] mb-4">{data.price}$</h4>
            <p className="mb-[2.125rem]">Will be replaced with Add to Cart feature</p>
            <hr className="w-full mb-6"/>
            <p className="text-[#333333] text-lg leading-[1.625rem] mb-2">Category: <span className="text-[#4f4f4f]">{data.category}</span></p>
            <p className="text-[#333333] text-lg leading-[1.625rem] mb-2">Tags: {data.tags.map((tag,index) =>(
              <span key={index} className="text-[#4f4f4f]">{tag} </span>
            ))}</p>
          </div>
        </div>
      </div>
  );
}
