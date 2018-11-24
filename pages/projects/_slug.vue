<template>
  <div v-html="content.default"/>
</template>


<script>
export default {
  async asyncData({ params }) {
    try {
      const fileContent = await import(`~/assets/projects/${params.slug}/${
        params.slug
      }.md`)
      return {
        content: fileContent
      }
    } catch (e) {
      console.log('Error caught: ' + e)
    }
  }
}
</script>
