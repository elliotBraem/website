<template lang="pug">
  div
    .portrait
      PortraitMode
    .landscape
      BusinessCard
    .desktop

</template>

<script>
import PortraitMode from '@/components/PortraitMode';
import BusinessCard from '@/components/BusinessCard';


export default {
  components: {
    PortraitMode,
    BusinessCard,
  },
};
</script>

<style lang="stylus" scoped>

  div
    height: 100%

  @media screen and (orientation:portrait)
    .landscape,
    .desktop
      display: none

  @media screen and (orientation:landscape)
    .portrait,
    .desktop
      display: none

// // Small devices (landscape phones, 420px and up)
// @media (min-width: 420px)

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px)

</style>

