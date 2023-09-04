<script lang="ts">
	import DatePicker from '$lib/DatePicker.svelte';

	let date: string;
	let year: number;
	let month: number;
	let day: number;
</script>

<div class="mx-auto w-full container pt-10 px-4 sm:px-6 lg:px-8">
	<div class="mx-auto grid grid-cols-1 items-start sm:max-w-lg lg:max-w-6xl">
		<div
			class="relative rounded-lg text-center mb-6 border boreder-1 dark:border-none dark:bg-gray-800"
		>
			<form class="p-6">
				<DatePicker bind:date bind:year bind:month bind:day />
			</form>
		</div>
		<div class="relative text-center bg-red-300">Not implemented yet.</div>
	</div>
</div>
