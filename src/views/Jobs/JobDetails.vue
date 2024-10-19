<template>
  <div v-if="job">
    <div>
      <h1>Job Details Page</h1>
      <p>the job id is {{ job.id }}</p>
    </div>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },

  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style>

</style>