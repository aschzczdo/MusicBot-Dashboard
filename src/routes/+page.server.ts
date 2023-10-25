import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) {
        throw redirect(307, '/login');
    }

    return {};
}) satisfies PageServerLoad;