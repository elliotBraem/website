<template lang="pug">
  b-container
    b-row.justify-content-center(v-for="project in projects" v-bind:key="project.id")
      b-col
        ProjectCard(v-bind:project="project")
</template>

<script>
import ProjectCard from '~/components/projects/ProjectCard'

export default {
  components: {
    ProjectCard
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>

<style lang="stylus" scoped>
  .project-card
    max-width: 800px

  .project-image
    float: left
</style>
