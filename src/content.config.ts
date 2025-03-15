import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writings = defineCollection({
	loader: glob({  pattern: '**/*.{md,mdx}', base: 'contents/writing/' }),
	schema: z.object({
		title: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		pubDate: z.string().transform((str) => new Date(str)),
		description: z.string(),
		tags: z.array(z.string()),
	}),
});

const studyCases = defineCollection({
	loader: glob({  pattern: '**/*.{md,mdx}', base: 'contents/study-cases/' }),
	schema: z.object({
		title: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		pubDate: z.string().transform((str) => new Date(str)),
		description: z.string(),
		tags: z.array(z.string()),
	}),
});

export const collections = { writings, studyCases };