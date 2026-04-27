import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			posted: z.boolean(),
			title: z.string(),
			subtitle: z.string().optional(),
			subsubtitle: z.string().optional(),
			author: z.string().optional(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			postedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			ogImageUrl: z.string().optional(),
			category: z.object({
				title: z.string(),
				url: z.string().optional(),
			}),
		}),
});

const brewingtips = defineCollection({
	loader: glob({ base: './src/content/articles/brewingtips', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			posted: z.boolean(),
			title: z.string(),
			subtitle: z.string().optional(),
			subsubtitle: z.string().optional(),
			author: z.string().optional(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			postedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			ogImageUrl: z.string().optional(),
			category: z.object({
				title: z.string(),
				url: z.string().optional(),
			}),
		}),
});

const gongfuteapot = defineCollection({
	loader: glob({ base: './src/content/articles/gongfuteapot', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			posted: z.boolean(),
			title: z.string(),
			subtitle: z.string().optional(),
			subsubtitle: z.string().optional(),
			author: z.string().optional(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			postedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			ogImageUrl: z.string().optional(),
			category: z.object({
				title: z.string(),
				url: z.string().optional(),
			}),
		}),
});

const questionsandanswers = defineCollection({
	loader: glob({ base: './src/content/articles/questionsandanswers', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			posted: z.boolean().optional(),
			title: z.string(),
			subtitle: z.string().optional(),
			subsubtitle: z.string().optional(),
			questions: z.array(z.string()).optional(),
			author: z.string().optional(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			postedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			ogImageUrl: z.string().optional(),
			category: z.object({
				title: z.string(),
				url: z.string().optional(),
			}),
		}),
});

const tea = defineCollection({
	loader: glob({ base: './src/content/tea', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			posted: z.boolean().default(true),
			title: z.string(),
			subtitle: z.string().optional(),
			description: z.string(),
			region: z.string(),
			variety: z.string(),
			yieldYear: z.string(),
			aging: z.string().optional(),
			item: z.string().optional(),
      		price: z.number(),
			heroImage: z.optional(image()),
			sliderImages: z.array(z.object({
				src: z.string(),
				alt: z.string().optional(),
			})),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.array(z.string()),
      		tags: z.array(z.string())
		}),
});

export const collections = { articles, brewingtips, gongfuteapot, questionsandanswers, tea };
