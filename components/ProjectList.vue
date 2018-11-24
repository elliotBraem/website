<template lang="pug">
  ul
    li(v-for="project in projects")
  
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.mdFiles
    }
  }
}
</script>
