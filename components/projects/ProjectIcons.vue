<template>
  <div class="level mt-3">
    <div class="level-left">
      <div class="level-item">
        <Fab :i="'github'" :link="project.url" />
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
