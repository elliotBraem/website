<template lang="pug">
  div
    nuxt
    PageFooter
</template>

<script>
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    PageFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', '-apple-system', 'BlinkMacSystemFont',
    'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: #1f305e;
}

a {
  color: #306bac;
  -webkit-transition: color 0.4s;
  transition: color 0.4s;
}

a:hover {
  color: #1f305e;
  -webkit-transition: color 0.9s;
  transition: color 0.9s;
  text-decoration: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
