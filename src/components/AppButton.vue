<template>
  <div @click="clickHandler" class="btn" :class="{'disabled': disabled}">Another hero</div>
</template>

<script>
  export default {
    name: 'AppButton',
    props: {
      disabled: Boolean
    },
    methods: {
      clickHandler() {
        if (!this.disabled) this.$emit('click');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    width: 180px;
    padding: 8px;
    margin: 0 auto;
    border: 1px solid #999;
    border-radius: 8px;
    background-color: #bbb;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: .2s;
    
    &.disabled {
      color: #777;
    }

    &:hover {
      background-color: #ccc;
    }
  }
</style>
