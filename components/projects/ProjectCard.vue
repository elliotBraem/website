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
    width: 100%

  .project-image
    float: left

  /* Small Devices, Tablets */
  // @media only screen and (min-width : 768px)

  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px)
    .project-card
      max-width: 800px
      -webkit-box-shadow: 3px 10px 13px -6px rgba(0,0,0,0.75)
      -moz-box-shadow: 3px 10px 13px -6px rgba(0,0,0,0.75)
      box-shadow: 3px 10px 13px -6px rgba(0,0,0,0.75)

  /* Large Devices, Wide Screens */
  // @media only screen and (min-width : 1200px)
</style>
