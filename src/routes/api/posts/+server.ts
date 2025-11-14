import type { PostModule } from '../../../types';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const postModules = import.meta.glob<PostModule>('/src/posts/*.md', { eager: true });

	const posts = Object.keys(postModules).map((path) => {
		const slug = path.slice(path.lastIndexOf('/') + 1).replace('.md', '');
		return {
			slug,
			metadata: postModules[path].metadata
		};
	});

	const sortedPosts = posts.sort((post1, post2) => {
		return (
			new Date(post2.metadata.publishedAt).getTime() -
			new Date(post1.metadata.publishedAt).getTime()
		);
	});

	return json(sortedPosts);
};
