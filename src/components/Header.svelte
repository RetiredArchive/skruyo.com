
<script>
    let { site_title = "skruyo's web",
        embed_title = "skruyo's website",
        embed_image = "https://avatars.githubusercontent.com/u/112793965",
        embed_description = "bleh"
    } = $props();
</script>

<svelte:head>
    <meta charset="utf-8" />
    <title>{site_title}</title>
    <link rel="icon" type="image/x-icon" href="/icon.png">
    <meta name="description" content={embed_description} />

    <!-- Embed -->
    <meta content={embed_title} property="og:title" />
    <meta content={embed_description} property="og:description" />
    <meta content="https://skruyo.com" property="og:url" />
    <meta content={embed_image} property="og:image" />
    <meta content="#FFFFFF" data-react-helmet="true" name="theme-color" />
    
</svelte:head>