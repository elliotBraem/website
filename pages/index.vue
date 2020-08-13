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
