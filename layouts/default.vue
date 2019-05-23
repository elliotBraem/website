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


<style lang="stylus">
html
  font-family: 'Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI',
    'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

body
  background-color: #D3D3D3

h1,
h2,
h3,
h4,
h5,
h6,
p
  color: #1F305E

a
  color: #306BAC
  -webkit-transition: color .4s;
  transition: color .4s;

a:hover
  color: #1F305E;
  -webkit-transition: color .9s;
  transition: color .9s;
  text-decoration: none;

*,
*:before,
*:after
  box-sizing: border-box;
  margin: 0;

</style>
