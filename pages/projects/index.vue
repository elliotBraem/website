<template lang="pug">
  .wrapper
    ProjectList
</template>

<script>
import ProjectList from '~/components/projects/ProjectList'

export default {
  layout: 'page',
  components: {
    ProjectList
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 100%
</style>
