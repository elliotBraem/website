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
  data() {
    return {
      numberOfColumns: 1
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
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
    grid-gap: 1em
    justify-items: center;

</style>
