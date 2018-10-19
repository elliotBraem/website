<template lang="pug">
  .container
    .row
      .col-sm
        ProfilePicture
      .col-sm
        Info
</template>

<script>
import ProfilePicture from '@/components/ProfilePicture';
import Info from '@/components/Info';


export default {
  components: {
    ProfilePicture,
    Info,
  },
};
</script>

<style lang="stylus" scoped>
.row
  padding-bottom: 50px;
</style>

