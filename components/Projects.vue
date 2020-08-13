<template>
  <ProjectList :projects="projects" />
</template>

<script>
import ProjectList from '~/components/projects/ProjectList'

export default {
  components: {
    ProjectList
  },
  computed: {
    projects () {
      return [
        { childMsg: 'Foo' },
        { childMsg: 'Bar' }
      ]
    }
  }
}
</script>

<style>
</style>
