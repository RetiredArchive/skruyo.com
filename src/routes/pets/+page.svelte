<script>
    import { Button as SaraButton } from "saraui";
    import { showNotification as showSaraNotif} from "saraui";

    let petName = '';

    async function handleSubmit() {

        if (petName.trim()) {
            try {
                const res = await fetch(`/graphics/pets/${petName.trim()}/data.txt`);
                
                if (res.status === 404) {
                    showSaraNotif("error", `No pet data found at ${petName.trim()}`);
                    petName = ""
                    return;
                }

                if (!res.ok) {
                    showSaraNotif("error", `Error fetching cat: ${res.statusText}`);
                    petName = ""
                    return;
                }

                window.location.href = `/pets/${petName}`;
            } catch (error) {
                console.log("??");
                showSaraNotif("error", `Network error: ${error.message}`);
                petName = ""
            
            }
        }
    }


    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }
</script>

<div class="container flex items-center justify-center m-auto flex-col">
    <img alt="pet pic" class="p-12 justify-center" src="/graphics/pets/cat.png"/>
    <p class="p-4 m-auto">type a pet name it might be a page (THESE ARE NOT MY PETS)</p>
    <div class="m-auto flex flex-row items-center justify-center">
        <input 
            type="text" 
            placeholder="Type pet name here" 
            class="input input-bordered w-full max-w-xs" 
            bind:value={petName}
            on:keypress={handleKeyPress}
        />
        <SaraButton color="secondary" onClick={handleSubmit}>Go</SaraButton>
    </div>
</div>