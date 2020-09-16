<template>
  <main id="cars" class="container-fluid">
    <div class="row my-3">
      <div class="col" id="form">
        <form @submit.prevent="createJob" class="form-inline">
          <div class="form-group p-1">
            <label class="mr-1" for="jobTitle">Job Title</label>
            <input
              v-model="newJob.jobTitle"
              type="text"
              name="jobTitle"
              id="jobTitle"
              class="form-control"
              placeholder="Job Title..."
            />
          </div>
          <div class="form-group p-1">
            <label class="mr-1" for="company">Company</label>
            <input
              v-model="newJob.company"
              type="text"
              name="company"
              id="company"
              class="form-control"
              placeholder="company..."
            />
          </div>
          <div class="form-group p-1">
            <label class="mr-1" for="rate">Pay Rate</label>
            <input
              v-model="newJob.rate"
              type="number"
              name="rate"
              id="rate"
              class="form-control"
              placeholder="Pay Rate..."
            />
          </div>
          <div class="form-group p-1">
            <label class="mr-1" for="hours">Hours</label>
            <input
              v-model="newJob.hours"
              type="number"
              name="hours"
              id="hours"
              class="form-control"
              placeholder="Hours per week..."
            />
          </div>
          <div class="form-group p-1">
            <label class="mr-1" for="description">Description</label>
            <input
              v-model="newJob.description"
              type="text"
              name="description"
              id="description"
              class="form-control"
              placeholder="Description..."
            />
          </div>
          <button type="submit" class="btn btn-outline-success">Add Job</button>
        </form>
      </div>
    </div>
    <div class="row" id="data">
      <JobPost v-for="job in jobs" :key="job._id" :jobData="job" />
    </div>
    </main>
</template>

<script>
import JobPost from '../components/JobPost'
export default {
  name: "Jobs",
  mounted() {
    this.$store.dispatch('getAllJobs')
  },

  data() {
    return {
      newJob: {}
    }
  },

  computed: {
    jobs() {
      return this.$store.state.jobs
    }
  },

  methods: {
    createJob() {
      this.$store.dispatch('createJob', this.newJob)
    }
  },

  components: {
    JobPost
  }
}
</script>

<style>

</style>