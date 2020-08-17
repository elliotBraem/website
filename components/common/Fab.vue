<template>
  <a :href="`${link}`" target="_blank">
    <font-awesome-icon :class="`${classes}`" :icon="['fab', i]" />
  </a>
</template>

<script>
export default {
  props: {
    i: {
      type: String,
      required: true,
      default: 'github'
    },
    classes: {
      type: String,
      required: false,
      default: 'icon is-medium'
    },
    link: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
