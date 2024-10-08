<template>
  <div>
    <h1>Jobs</h1>

    <div v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'Ninja UX Designer', id: 1, details: 'lorem' },
        { title: 'Ninja Web Designer', id: 2, details: 'lorem' },
        { title: 'Ninja Vue Designer', id: 3, details: 'lorem' }
      ]
    }
  }
}
</script>

<style>
  
</style>