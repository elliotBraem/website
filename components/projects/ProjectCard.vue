<template lang="pug">
  b-card.project-card(
    v-b-toggle="'project-details-' + project.attributes.id"
    :style="BGcolor"
    footer-tag="footer"
    footer-bg-variant="transparent"
  )
    b-img.project-image(v-bind:src="project.attributes.img")
    b-collapse(v-bind:id="'project-details-' + project.attributes.id")
      h6.description {{project.attributes.description}}
    footer
      b-row
        b-col
          h3 {{project.attributes.title}}
        b-col
          h3
            Icon.github(:type="'github'" :href='project.attributes.url')
</template>

<script>
import Icon from '~/components/common/Icon'
export default {
  components: {
    Icon
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    BGcolor() {
      return {
        backgroundColor: '#' + this.project.attributes.color
      }
    }
  }
}
</script>

<style scoped>
.card-body {
  padding: 0.25rem 1rem;
}

footer {
  border: none;
}

.project-card {
  width: 100%;
  border: none;
  margin: 20px 0;
}

.project-image {
  align-self: center;
  max-height: 400px;
}

.github {
  float: right;
}

.description {
  font-weight: lighter;
}

/* Small Devices */
/* @media only screen and (min-width: 600px) { */
.project-card {
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.project-card::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.project-card:hover {
  -webkit-transform: scale(1.05, 1.05);
  transform: scale(1.05, 1.05);
}

.project-card:hover::after {
  opacity: 1;
}

.project-card:active {
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.project-card:active::after {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
/* } */
</style>
