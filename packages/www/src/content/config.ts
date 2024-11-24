import { z, defineCollection, reference } from 'astro:content';

const developmentUpdatesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }).optional(),
    })
});

const llmLogsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    })
});

export const collections = {
    'development-updates': developmentUpdatesCollection,
    'ai-insights': llmLogsCollection,
}