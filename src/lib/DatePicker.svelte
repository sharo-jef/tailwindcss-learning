<script lang="ts">
	const currentDate = new Date();
	export let date = `${`${currentDate.getFullYear()}`.padStart(4, '0')}-${`${
		currentDate.getMonth() + 1
	}`.padStart(2, '0')}-${`${currentDate.getDate()}`.padStart(2, '0')}`;
	export let year = +date.slice(0, 4);
	export let month = +date.slice(5, 7);
	export let day = +date.slice(8, 10);
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
	type="date"
	bind:value={date}
	class="p-2 border-b border-b-1 border-gray-600 dark:bg-gray-800 dark:text-gray-400"
/>
