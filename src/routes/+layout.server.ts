import type { LayoutServerLoad } from './$types';

export const load = (({ url }) => {
	return {
		url: url.href,
	};
}) satisfies LayoutServerLoad;
