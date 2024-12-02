<script>
	import '../app.css';
	import { blur } from "svelte/transition";
	import { SaraProvider } from 'saraui';
	import Header from "$components/Header.svelte";
    import NavBar from "$components/NavBar.svelte";
	export let data;
</script>

<Header/>
<NavBar/>
{#key data.pathname}
	<SaraProvider>
		<slot class="container m-auto justify-center items-center text-center flex" in:blur={{ duration: 300, delay: 400 }} out:blur={{ duration: 300 }}/>
	</SaraProvider>
{/key}
