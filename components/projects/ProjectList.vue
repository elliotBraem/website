<template lang="pug">
  div.wrapper
    div
        ul.project-list(:style="gridStyle")
          li.project-item(v-for="project in projects" v-bind:key="project.id")
            b-container.fluid
            ProjectCard.project(v-bind:project="project")
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
      return Object.values(projects).sort(function(a, b) {
        return b.attributes.year - a.attributes.year
      })
    },
    gridStyle() {
      return {
        gridTemplateColumns:
          this.$mq === 'sm'
            ? `repeat(1, minmax(100px, 1fr))`
            : `repeat(2, minmax(100px, 1fr))`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    max-width: 1024px
    margin: auto

  ul
    list-style-type: none;
    padding-left: 0px;

  .project-list
    display: grid
    grid-gap: 3em 1em
    justify-items: center;

</style>
