import type { Component } from 'svelte';

export type Post = {
	metadata: Metadata;
	default: Component;
};

export type Metadata = {
	title: string;
	publishedAt: string;
	summary: string;
};
