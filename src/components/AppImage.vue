<template>
  <div class="image">
    <img :src="imageSrc" alt="">
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
    min-height: 280px;

    img {
      max-width: 100%;
      max-height: 100%;
      margin-bottom: 16px;
      border: 1px solid #bbb;
      border-radius: 8px;
    }
  }
</style>
