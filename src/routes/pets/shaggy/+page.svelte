<script>
	let name = "shaggy"; 
	let petData = []
	let imageURL = "/graphics/pets/cat.png";
	onMount(async () => {
		const response = await fetch(`/graphics/pets/${name}/data.txt`);
		petData = (await response.text()).split(":");

		if (petData.length >= 2)
			imageURL = `/graphics/pets/${data.pet.name}/${Math.floor(Math.random() * arraydata[0]) + 1}.${arraydata[1]}`;
		else 
			console.error(`No data found for pet: ${name}`); // shouldnt happen
	})
</script>


<div class="container flex items-center flex-col justify-center m-auto">
		<img 
				alt="" 
				class="p-12 justify-center size-7/12 cursor-grab" 
				draggable="false" 
				src={imageUrl}
		/>
		{#if petData[2] != null}
		<p>{petData[2]}</p>
		{/if}
</div>