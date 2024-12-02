<script>
    let { image_link, lang_name, lang_site } = $props();
</script>
<!-- Not actually a button but acts like it-->
<div class="tooltip" data-tip={lang_name}>
    <a class="btn btn-ghost btn-outline size-24 m-2 p-3" href={lang_site}>
        <img alt={lang_name} class="p-2" src={image_link}/>
    </a>
</div>