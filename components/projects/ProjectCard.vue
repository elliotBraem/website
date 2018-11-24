<template lang="pug">
  b-card.project-card(v-bind:title="project.attributes.title" border-variant="light")
    b-img.project-image(v-bind:src="project.attributes.img")
    p {{project.attributes.description}}
    b-btn(v-b-toggle="'project-details-' + project.attributes.id") Toggle Collapse
    b-collapse(v-bind:id="'project-details-' + project.attributes.id")
      b-card
        div(v-html="project.html")
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
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
