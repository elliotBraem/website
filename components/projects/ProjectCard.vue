<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="project.img" :alt="project.title">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-2">
            {{ project.title }}
          </p>
        </div>
      </div>
      <div class="content">
        {{ project.description }}
        <br>
        <Fab :i="github" :link="project.url" />
      </div>
    </div>
  </div>
</template>

<script>
import Fab from '~/components/common/Fab'

export default {
  components: {
    Fab
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
