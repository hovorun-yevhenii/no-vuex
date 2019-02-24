<template>
  <div>
    <div class="title">Hero</div>

    <app-image :imageSrc="imageSrc"
               class="image">
    </app-image>

    <div v-for="(value, key) in hero"
         :key="key" v-if="value"
         class="info">

      <div class="info__key">{{ key }}</div>
      <div class="info__value">{{ value }}</div>

    </div>
  </div>
</template>

<script>
  import AppImage from './AppImage'
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppHero',
    components: {
      AppImage
    },
    computed: {
      ...mapGetters({
        hero: 'getHero',
        imageSrc: 'getImageSrc'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    width: 120px;
    margin: 0 auto 16px;
    cursor: pointer;
  }
</style>
