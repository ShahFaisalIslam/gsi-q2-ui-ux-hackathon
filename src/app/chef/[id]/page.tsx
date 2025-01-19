import Image from "next/image";

interface IChefCard {
  name: string,
  imageUrl: string,
  available: boolean,
  description: string,
  specialty: string,
  position: string,
  experience: number
};


export default async function Home({params}:{params: {id:string}}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/chef?id=${params.id}`,{cache: "no-store"});
  const data : IChefCard = await response.json();
  return (
      <div className="min-h-screen px-[18.75rem] py-[7.5rem]">
        <div className="flex gap-[3.4375rem]">
          <Image src={data.imageUrl} width={647} height={596} alt={data.name}/>
          <div className="flex flex-col items-start">
            {data.available ? (
            <div className="px-[1.0625rem] py-[0.1875rem] bg-[#ff9f0d] text-white rounded-md text-sm mb-2">Available</div>
            ) : (
              <div className="px-[1.0625rem] py-[0.1875rem] bg-[#333333] text-white rounded-md text-sm mb-2">Unavailable</div>
              )}
            <h2 className="text-5xl leading-[3.5rem] text-[#333333] mb-6 font-bold">{data.name}</h2>
            <h3 className="text-3xl leading-[3.5rem] text-[#333333] mb-4 ">{data.position}</h3>
            <p className="text-lg leading-[1.625rem] text-[#4f4f4f] mb-8">{data.description}</p>
            <hr className="w-full mb-8"/>
            <p className="text-[#333333] text-lg leading-[1.625rem] mb-2">Specialty: <span className="text-[#4f4f4f]">{data.specialty}</span></p>
            <p className="text-[#333333] text-lg leading-[1.625rem] mb-2">Experience: <span className="text-[#4f4f4f]">{data.experience} Years</span></p>
          </div>
        </div>
      </div>
  );
}
