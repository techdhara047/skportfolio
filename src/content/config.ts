import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      tools: z.array(z.string()),
      liveLink: z.string().url(),
      codeLink: z.string().url(),
    }),
});
const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  services: servicesCollection,
};
