<template lang="pug">
  .d-inline-block
    Icon.mr-2(:href="'https://github.com/elliotBraem'" :type="'github'")
    Icon.mr-2(:href="'https://www.linkedin.com/in/elliot-braem-91165a112/'" :type="'linkedin'")
    Icon.mr-2(:href="'https://www.facebook.com/profile.php?id=100001352883257'" :type="'facebook'")
    Icon.mr-2(:href="'https://www.instagram.com/efizzysnaps/'" :type="'instagram'")
    Icon.mr-2(:href="'https://twitter.com/EFizzySnaps'" :type="'twitter'")
</template>

<script>
import Icon from '~/components/common/Icon'

export default {
  name: 'ContactList',
  components: {
    Icon
  }
}
</script>
