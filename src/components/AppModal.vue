<template>
  <div class="modal">
    <div class="modal__body">

      <div @click="closeModal" class="modal__close">+</div>

      <app-image :imageSrc="imageSrc"></app-image>

      <div class="name">{{ heroName }}</div>

    </div>
  </div>
</template>

<script>
  import AppImage from './AppImage'
  export default {
    name: 'AppModal',
    props: {
      imageSrc: String,
      heroName: String
    },
    components: {
      AppImage
    },
    methods: {
      closeModal() {
        this.$emit('closeModal');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    background-color: rgba(100,100,100,.7);
    overflow-y: auto;

    &__close {
      position: absolute;
      top: -18px;
      right: -18px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      color: #eee;
      font-size: 28px;
      font-weight: bold;
      background-color: #222;
      transform: rotate(45deg);
      cursor: pointer;
    }

    &__body {
      position: relative;
      margin: auto;
      padding: 16px;
      border: 1px solid #bbb;
      border-radius: 8px;
      background-color: #ddd;

      .name {
        padding: 16px 0 8px;
        text-align: center;
        font-weight: bold;
      }
    }
  }
</style>
