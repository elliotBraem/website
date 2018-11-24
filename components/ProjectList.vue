<template lang="pug">
  ul
    li(v-for="project in projects")
      h1 {{ project.attributes.title }}
  
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>
