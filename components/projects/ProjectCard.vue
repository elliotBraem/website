<template lang="pug">
  b-container.fluid
    div.project-card(v-b-toggle="'project-details-' + project.attributes.id")
      b-img.project-image(v-bind:src="project.attributes.img" fluid).mx-auto
      h3.title.pl-3 {{project.attributes.title}}
      //p.description {{project.attributes.description}}
      b-collapse.content(v-bind:id="'project-details-' + project.attributes.id")
        div.pl-3
          p.description {{project.attributes.description}}
          nuxt-link(:to="'/projects/'+project.attributes.id" v-bind:content="project") Read more
          //- div(v-html="project.html")
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
    max-width:400px
    border-radius: 5px

  .title
    text-align: left

  .description
    font-weight: lighter
  
  /* Small Devices, Tablets */
  @media only screen and (min-width : 768px)
    .project-card
      position: relative;
      display: inline-block;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
      -webkit-transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
      transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);

    .project-card::after
      content: ""
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

    .project-card:active
      -webkit-transform: scale(1.0, 1.0);
      transform: scale(1.0, 1.0);
      transition: all .2s cubic-bezier(0.165, 0.84, 0.44, 1);

    .project-card:active::after
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  /* Medium Devices, Desktops */
  // @media only screen and (min-width : 992px)

  /* Large Devices, Wide Screens */
  // @media only screen and (min-width : 1200px)
</style>
