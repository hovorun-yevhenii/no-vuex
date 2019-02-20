<template>
  <div class="image">
    <img :src="imageSrc"  alt="hero image"/>
  </div>
</template>

<script>
  export default {
    name: 'AppImage',
    props: {
      imageSrc: String
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      border: 1px solid #bbb;
      border-radius: 8px;
    }
  }
</style>
