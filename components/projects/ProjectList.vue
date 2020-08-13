<template>
  <ul id="project-list">
    <li v-for="project in projects" :key="project.id">
      <ProjectCard :project="project" />
      <br>
    </li>
  </ul>
</template>

<script>
import ProjectCard from '~/components/projects/ProjectCard'
export default {
  components: {
    ProjectCard
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
