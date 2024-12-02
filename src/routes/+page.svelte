<script>
    import { slide } from "svelte/transition";
    import LangButton from "$components/buttons/LangButton.svelte";
    import Avatar from "$components/imgs/Avatar.svelte";

    let expanded = $state(false);
</script>

<div class="container flex flex-col m-auto items-center justify-center">    
    <div class="collapse w-fit max-w-4xl bg-base-200" >
        <input type="checkbox" onclick={() => expanded = !expanded}/>
        <div class="collapse-title text-xl font-medium flex-row flex">
            <!-- UNCOLLAPSED CONTENT -->
            <Avatar image_link="https://avatars.githubusercontent.com/u/112793965" alt="avatar"/>
            <div class="m-4 p-2 w-auto">
                <h1 class=" text-7xl">I'm Daniel</h1>
                <h2>I'm a programmer who barely knows shit</h2>
                <h2>Male | he/she</h2>

            </div>
        </div>
        {#if expanded}
        <div class="collapse-content text-center" transition:slide>
            <!-- COLLAPSED CONTENT -->
           <h1>Programming Languages I'm learning</h1>
           <div class="flex flex-row justify-center p-4">
                <LangButton image_link="https://haxe.org/img/branding/haxe-logo-glyph.png" lang_name="Haxe" lang_site="https://haxe.org/"/>
                <LangButton image_link="http://www.andreas-rozek.de/Lua/Lua-Logo_64x64.png" lang_site="https://www.lua.org/" lang_name="Lua"/>
                <LangButton lang_site="https://www.python.org/" lang_name="Python" image_link="/graphics/languages/python.png"/>
                <LangButton lang_site="https://developer.mozilla.org/en-US/docs/Web/HTML" lang_name="HTML" image_link="https://skruyo.com/public/graphics/lang/html5.webp"/>
                <LangButton lang_site="https://developer.mozilla.org/en-US/docs/Web/CSS" lang_name="CSS" image_link="https://www.coywolf.news/wp-content/uploads/2024/11/purple-css-logo.webp"/>
           </div>
           <h1>Frameworks/Engines I'm learning</h1>
           <div class="flex flex-row justify-center p-4">
                <LangButton image_link="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png" lang_name="Svelte" lang_site="https://svelte.dev/"/>
                <LangButton image_link="/graphics/frameworks/heaps.png" lang_site="https://heaps.io/" lang_name="Heaps"/>
                <LangButton image_link="https://godotengine.org/assets/press/icon_color.svg" lang_site="https://godotenginge.org/" lang_name="Godot"/>
           </div>
        </div>
        {/if}
    </div>
    <p>click to expand</p>

</div>
