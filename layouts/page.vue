<template lang="pug">
  div
    PageHeader
    nuxt
    PageFooter
</template>

<script>
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

export default {
  components: {
    PageFooter,
    PageHeader
  }
}
</script>
