<template lang="pug">
  .root
    .container.pt-3
      .row.align-items-start
        .col-4
          img(src="@/assets/logo.svg" alt="")
        .col-8.text-center.m-auto
          h1.mb-0 Elliot Braem
          p.mt-0 Software Engineer
      .row.align-items-center
        .col
          p.text-center Hi, I'm a senior at
            |  UW-Madison due to graduate in May, 2019.<br>
            |  This will be more of my Elevator Pitch, but
            |  right now, <br> I'm not sure what to write
      .row.justify-content-between.align-items-end
        .col-4
          h4.text-center projects
        .col-4
        .col-4
          h4.text-center contact me
          ul
            li Email
            li G, L, I
</template>

<script>
export default {
  name: 'BusinessCard',
};
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans')
@import url('https://fonts.googleapis.com/css?family=Caveat')

  .root
    font-family: 'Caveat', cursive
    height: 100%

  p
    font-family: 'Open Sans', sans-serif
    font-size: .8rem

  ul
    list-style: none
</style>

