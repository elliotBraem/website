<template>
  <div>
    <h1>{{ content.attributes.title }}</h1>
    <h1>{{ content.attributes.year }} </h1>
    <p> {{ content.attributes.description }} </p>
    <div v-html="content.html"/>
  </div>
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
