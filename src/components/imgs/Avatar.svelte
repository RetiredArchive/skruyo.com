<script>
  let { 
    image_link, 
    alt = "Avatar" 
  } = $props();
</script>

<div class="avatar size-48">
    <div class="rounded-full">
      <img alt={alt} src={image_link} />
    </div>
</div>