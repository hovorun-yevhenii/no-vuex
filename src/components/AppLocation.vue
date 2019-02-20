<template>
  <div>
    <div class="title">Location</div>

    <div v-for="(value, key) in location"
         :key="key"
         class="info">

      <div class="info__key">{{ key }}</div>
      <div class="info__value">{{ value }}</div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppLocation',
    props: {
      location: Object
    }
  }
</script>
