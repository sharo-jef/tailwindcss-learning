// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type QueryData = {
		year: number | null;
		month: number | null;
		day: number | null;
		hour: number | null;
	};
}

export {};
