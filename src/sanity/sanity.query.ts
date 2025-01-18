import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function GetChefAll() {
    return sanityClient.fetch(groq`*[ _type == "chef" ]`);
}

export async function GetChefCardDataAll() {
    return sanityClient.fetch(groq`*[ _type == "chef" ]{
        name,
        "imageUrl":image.asset->url,
        position
    }`);
}

export async function GetChefCardData(id: string) {
    return sanityClient.fetch(groq`*[ _type == "chef" ][${id}]{
        name,
        "imageUrl":image.asset->url,
        position,
        description,
        available,
        specialty,
        experience
   }`);
}

// export async function GetChef() {
//     return sanityClient.fetch();
// }

// export async function GetFoodAll() {
//     return sanityClient.fetch();
// }

export async function GetFoodCardDataAll() {
    return sanityClient.fetch(groq`*[ _type == "food"]{
        name,
        "imageUrl":image.asset->url,
        price,
        originalPrice  
      }`);
}

export async function GetFoodCardData(id: string) {
    return sanityClient.fetch(groq`*[ _type == "food"][${id}]{
        name,
        "imageUrl":image.asset->url,
        description,
        price,
        originalPrice,
        available,
        category,
        tags  
      }`);
}

// export async function GetFood() {
//     return sanityClient.fetch();
// }