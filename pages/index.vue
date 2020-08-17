<template>
  <section class="section mt-6">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <ProfilePicture />
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-one-half">
          <Bio />
        </div>
      </div>
      <div>
        <ProjectList :projects="projects ? projects : []" />
      </div>
    </div>
  </section>
</template>

<script>
import projects from '~/static/projects.json'
import ProfilePicture from '~/components/ProfilePicture'
import Bio from '~/components/Bio'
import ProjectList from '~/components/projects/ProjectList'

export default {
  components: {
    ProfilePicture,
    Bio,
    ProjectList
  },
  asyncData ({ params }) {
    return { projects }
  }
}
</script>

<style>
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
