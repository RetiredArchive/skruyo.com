<script>
	import { onMount } from 'svelte';
	let name = "shaggy"; 
	let petData = []
	let imageURL = "/graphics/pets/cat.png";
	let info = "";
	onMount(async () => {
		const response = await fetch(`/graphics/pets/${name}/data.txt`);
		petData = (await response.text()).split(":");

		if (petData.length >= 2) {
			imageURL = `/graphics/pets/${name}/${Math.floor(Math.random() * petData[0]) + 1}.${petData[1]}`;
			info = petData[2];
		} else 
			console.error(`No data found for pet: ${name}`); // shouldnt happen
	})
</script>


<div class="container flex items-center flex-col justify-center m-auto">
		<img 
				alt="" 
				class="p-12 justify-center size-7/12 cursor-grab" 
				draggable="false" 
				src={imageURL}
		/>
		{#if info != null}
		<p>{info}</p>
		{/if}
</div>