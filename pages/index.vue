<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <ProfilePicture />
        </div>
        <div class="column">
          <Bio />
        </div>
      </div>
      <div>
        <Projects />
      </div>
    </div>
  </section>
</template>

<script>
import ProfilePicture from '~/components/ProfilePicture'
import Bio from '~/components/Bio'
import Projects from '~/components/Projects'

export default {
  components: {
    ProfilePicture,
    Bio,
    Projects
  }
}
</script>

<style>
.container {
  /* justify-content: center; */
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
