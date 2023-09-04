<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	const SITE_NAME = 'Tailwind Learning';

	if (browser) {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	let theme = browser
		? localStorage.theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches || 'light')
		: 'dark';

	function toggleTheme(): undefined {
		theme = theme === 'dark' ? 'light' : 'dark';
		if (browser) {
			if (theme === 'dark' && !document.body.classList.contains('dark')) {
				document.documentElement.classList.add('dark');
				localStorage.theme = 'dark';
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.theme = 'light';
			}
		}
	}
</script>

<div class="dark:bg-gray-900 min-h-screen">
	<header
		class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 dark:text-slate-300 dark:bg-gray-800 shadow"
	>
		<nav class="mx-auto container px-4 sm:px-6 lg:px-8">
			<div class="relative flex items-center py-6">
				<a class="flex-none" href="{base}/">
					<span class="text-xl">{SITE_NAME}</span>
				</a>
				<div class="ml-auto hidden lg:flex lg:items-center">
					<a class="mx-4" href="{base}/">Button</a>
					<a class="mx-4" href="{base}/">Support</a>
					<div class="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-4" />
					{#if browser && theme === 'dark'}
						<button on:click={toggleTheme}>
							<svg class="w-6 h-6 mx-4" viewBox="0 0 24 24" fill="none"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
									class="fill-transparent"
								/><path
									d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
									class="fill-slate-400 dark:fill-slate-500"
								/><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
									class="fill-slate-400 dark:fill-slate-500"
								/></svg
							>
						</button>
					{:else}
						<button on:click={toggleTheme}>
							<svg
								class="w-6 h-6 mx-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path
									d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									class="fill-sky-400/20 stroke-sky-500"
								/><path
									d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
									class="stroke-sky-500"
								/></svg
							>
						</button>
					{/if}
				</div>
			</div>
		</nav>
	</header>

	<slot />

	<footer class="mx-auto mt-32 w-full container px-4 sm:px-6 lg:px-8 border-t border-slate-900/5">
		<div class="mt-10 text-center text-3xl leading-5 text-slate-500 dark:text-slate-400">
			{SITE_NAME}
		</div>
		<div class="mt-8 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
			Created by sharo-jef.
		</div>
		<div
			class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-500"
		>
			<a href="{base}/">Hoge</a>
			<div class="h-4 w-px bg-slate-500/20" />
			<a href="{base}/">Fuga</a>
		</div>
	</footer>
</div>
