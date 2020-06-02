<template lang="pug">
  b-container
    .project-list
      div(v-for="project in projects" :key="project.id")
        ProjectCard.project(:project="project")
</template>

<script>
import ProjectCard from '~/components/projects/ProjectCard'

export default {
  components: {
    ProjectCard
  },
  computed: {
    projects() {
      var projects = this.$store.state.projects
      // sort by year (descending)
      return Object.values(projects).sort((a, b) => {
        return b.attributes.year - a.attributes.year
      })
    }
  }
}
</script>

<style scoped>
.project-list {
  justify-items: center;
}
</style>
