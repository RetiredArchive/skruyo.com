<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    export let data;
    
    let arraydata = [];
    let imageUrl = '';
    let info = '';
    onMount(async () => {
        const txtdata = await fetch(`/graphics/pets/${data.pet.name}/data.txt`);
        arraydata = (await txtdata.text()).split(":")
        
        console.log(arraydata);
        if (arraydata.length >= 2) {
            console.log(arraydata)
            imageUrl = `/graphics/pets/${data.pet.name}/${Math.floor(Math.random() * arraydata[0]) + 1}.${arraydata[1]}`;
            info = arraydata[2];
        } else {
            imageUrl = '/graphics/pets/cat.png'
        }
    });
</script>

<div class="container flex items-center flex-col justify-center m-auto">
    <img 
        alt="" 
        class="p-12 justify-center size-7/12 cursor-grab" 
        draggable="false" 
        src={imageUrl}
    />
    {#if info != null}
    <p>{info}</p>
    {/if}
</div>