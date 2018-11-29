<template lang="pug">
  div.project-card(v-b-toggle="'project-details-' + project.attributes.id")
    b-img.project-image(v-bind:src="project.attributes.img" fluid)
    h3.title {{project.attributes.title}}
    p.description {{project.attributes.description}}
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
  .title
    text-align: left

  .description
    font-weight: lighter
  // .project-card:hover
  //   box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);

  .project-card
    max-width: 450px
  
  /* Small Devices, Tablets */
  @media only screen and (min-width : 768px)
    .project-card
      position: relative;
      display: inline-block;
      border-radius: 5px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
      -webkit-transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
      transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);

    .project-card::after
      content: ""
      border-radius: 5px
      position: absolute
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      opacity: 0;
      -webkit-transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
      transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);

    .project-card:hover
      -webkit-transform: scale(1.05, 1.05);
      transform: scale(1.05, 1.05);

    .project-card:hover::after
      opacity: 1;

  /* Medium Devices, Desktops */
  // @media only screen and (min-width : 992px)

  /* Large Devices, Wide Screens */
  // @media only screen and (min-width : 1200px)
</style>
