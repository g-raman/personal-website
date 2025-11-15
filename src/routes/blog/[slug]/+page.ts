import type { PostModule } from '../../../types';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob<PostModule>('/src/posts/*.md', { eager: true });
	const path = `/src/posts/${params.slug}.md`;

	const post = modules[path];

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		content: post.default,
		meta: post.metadata
	};
};
