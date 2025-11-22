import type { Component } from 'svelte';

export type PostModule = {
	metadata: Metadata;
	default: Component;
};

export type Post = {
	metadata: Metadata;
	slug: string;
};

export type Metadata = {
	title: string;
	publishedAt: string;
	summary: string;
};
