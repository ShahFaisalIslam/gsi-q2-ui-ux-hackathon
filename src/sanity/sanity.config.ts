import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./schemaTypes/";

export const SanityConfig = defineConfig({
    name: "default",
    title: "studio",
    projectId: "q5o7k2uk",
    dataset: "production",
    plugins: [structureTool(), visionTool()],
    basePath: "/studio",
    schema: {
        types: schema.types
    }
})

