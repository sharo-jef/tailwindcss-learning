<script lang="ts">
	import DatePicker from '$lib/DatePicker.svelte';
	import SearchResults from '$lib/SearchResults.svelte';

	let date: string;
	let year: number | null;
	let month: number | null;
	let day: number | null;
	let hour: number | string;
</script>

<div class="mx-auto w-full container pt-10 px-4 sm:px-6 lg:px-8">
	<div class="mx-auto grid grid-cols-1 items-start sm:max-w-lg lg:max-w-6xl">
		<div class="relative rounded-lg text-center mb-6 border dark:border-none dark:bg-gray-800">
			<form class="p-6 flex gap-4 justify-center">
				<DatePicker bind:date bind:year bind:month bind:day />
				<select
					class="h-10 p-2 outline-none border-b border-gray-600 dark:bg-gray-800 dark:text-gray-400"
					name="hour"
					bind:value={hour}
				>
					<option selected value="">指定なし</option>
					{#each [...Array(24).keys()] as h}
						<option value={h}>{h}時台</option>
					{/each}
				</select>
				<select
					class="h-10 p-2 outline-none border-b border-gray-600 dark:bg-gray-800 dark:text-gray-400"
					name="custom1"
				>
					<option selected value="-1">指定なし</option>
				</select>
				<select
					class="h-10 p-2 outline-none border-b border-gray-600 dark:bg-gray-800 dark:text-gray-400"
					name="custom2"
				>
					<option selected value="-1">指定なし</option>
				</select>
				<select
					class="h-10 p-2 outline-none border-b border-gray-600 dark:bg-gray-800 dark:text-gray-400"
					name="custom3"
				>
					<option selected value="-1">指定なし</option>
				</select>
				<select
					class="h-10 p-2 outline-none border-b border-gray-600 dark:bg-gray-800 dark:text-gray-400"
					name="custom4"
				>
					<option selected value="-1">指定なし</option>
				</select>
				<!--
				<input
					class="h-10 p-2 outline-none border-b border-gray-600 dark:bg-gray-800 dark:text-gray-400"
					type="text"
				/>
			  -->
				<button
					class="px-4 py-2 ml-4 text-gray-50 bg-black dark:border-b dark:border-gray-600 dark:bg-inherit dark:text-gray-400"
					>検索</button
				>
			</form>
		</div>
		<div
			class="relative p-6 text-center rounded-lg border dark:border-none dark:bg-gray-800 dark:text-gray-400"
		>
			<SearchResults
				queryData={{
					year,
					month,
					day,
					hour
				}}
			/>
		</div>
	</div>
</div>
