import { GetChefCardData, GetChefCardDataAll } from "@/sanity/sanity.query";


export async function GET(Request: Request) {
    const {searchParams} = new URL(Request.url);
    const id = searchParams.get("id");
    if (id === null) {
        const data = await GetChefCardDataAll();      
        return Response.json(data);
    }
    const data = await GetChefCardData(id);
    return Response.json(data);
}

// export async function GET(Request: Request) {
//     const {searchParams} = new URL(Request.url);
//     const id = searchParams.get("id");
//     if (id === null) {
//         const data = await GetFoodCardDataAll();
//         return Response.json(data);    
//     }
//     const data = await GetFoodCardData(id);
//     return Response.json(data);
// }