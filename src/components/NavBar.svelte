<script>
    const navBarItems = [
        {name: "Donate", href: "/donate"},
        {name: "Animals", href: "/pets"}
    ]
</script>

<div class="container">
<nav class="navbar-center  bg-base-100">
    <a class="btn btn-ghost text-xl" href="/">SKRUYO</a>
    {#each navBarItems as item}
        <a class="link link-hover p-4 text-xl" href={item.href}>{item.name}</a>
    {/each}
</nav>
</div>