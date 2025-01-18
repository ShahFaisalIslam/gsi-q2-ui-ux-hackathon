import { createClient, type ClientConfig } from "next-sanity";

const SanityClient: ClientConfig = {
    projectId: "q5o7k2uk",
    dataset: "production",
    apiVersion: "2025-01-18",
    useCdn: false
}

export default createClient(SanityClient);