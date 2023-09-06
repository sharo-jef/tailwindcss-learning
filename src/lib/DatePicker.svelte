<script lang="ts">
	const currentDate = new Date();
	export let date = `${`${currentDate.getFullYear()}`.padStart(4, '0')}-${`${
		currentDate.getMonth() + 1
	}`.padStart(2, '0')}-${`${currentDate.getDate()}`.padStart(2, '0')}`;
	export let year: number | null = +date.slice(0, 4);
	export let month: number | null = +date.slice(5, 7);
	export let day: number | null = +date.slice(8, 10);
	$: {
		const dateArray = date.split('-');
		year = +dateArray[0];
		month = +dateArray[1];
		day = +dateArray[2];
		if (isNaN(year) || isNaN(month) || isNaN(day)) {
			alert('Invalid date');
		}
	}
</script>

<input
	name="date"
	type="date"
	bind:value={date}
	class="h-10 p-2 outline-none rounded-none border-b border-gray-600 dark:bg-gray-800 dark:text-gray-400"
	pattern="\d{4}-\d{2}-\d{2}"
/>
