<template>
  <div @click="clickHandler"
       class="btn"
       :class="{'disabled': disabled}">
    Another hero
  </div>
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
    padding: 16px;
    margin: 0 auto;
    border: 2px solid #999;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
    color: #ddd;
    background-color: #222;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    &.disabled {
      color: transparent;
      background: #222 url(http://carparts-4u.com.ua/img/253.gif) center/12% no-repeat;
      filter: saturate(0);
    }

    &:hover {
      text-decoration: underline;
    }
  }
</style>
