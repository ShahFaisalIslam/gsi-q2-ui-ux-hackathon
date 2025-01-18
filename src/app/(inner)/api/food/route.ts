import { GetFoodCardData, GetFoodCardDataAll } from "@/sanity/sanity.query";


export async function GET(Request: Request) {
    let data: any;
    const { searchParams } = new URL(Request.url);
    const id = searchParams.get("id");
    if (id === null)
        data = await GetFoodCardDataAll();
    else
        data = await GetFoodCardData(id);

    return Response.json(data);
}