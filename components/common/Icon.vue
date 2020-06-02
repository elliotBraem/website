<template lang="pug">
  a(:href="href" target="_blank")
    font-awesome-icon(:icon="['fab', type]")
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: ''
    }
  }
}
</script>
