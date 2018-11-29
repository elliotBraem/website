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
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
