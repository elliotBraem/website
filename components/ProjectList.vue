<template lang="pug">
  b-container
    b-row(v-for="project in projects" :key="project.title")
      b-col
        b-card(v-bind:title="project.attributes.title" v-bind:img-src="project.attributes.img" img-top border-variant="light" style="max-width: 20rem;")
          p {{project.attributes.description}}
          b-btn(v-b-toggle="'project-details'") Toggle Collapse
          b-collapse(id="project-details")
            b-card
              div(v-html="project.html")

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

<style lang="stylus" scoped>
</style>
