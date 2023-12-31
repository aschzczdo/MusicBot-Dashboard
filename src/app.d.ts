// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
// declare namespace App {
// interface Locals {}
// interface PageData {}
// interface Error {}
// interface Platform {}
// }

// src/app.d.ts
/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		type DatabaseSessionAttributes = {};
	}
	namespace App {
		interface Locals {
			auth: import("lucia").AuthRequest;
		}
	}
}

// THIS IS IMPORTANT!!!
export { };