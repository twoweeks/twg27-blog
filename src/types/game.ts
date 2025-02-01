import { type ImageMetadata } from 'astro';

export type GameEntry = {
	title: string;
	genre: string | null;
	tools: string | null;
	description: string | null;
	archive: string;
	screenshot: ImageMetadata | null;
};
