<template>
  <div class="col-4">
    <router-link :to="{name: 'JobDetails', params: { id: jobData._id}}">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{jobData.jobTitle}} - {{jobData.company}} - ${{jobData.rate}}/hour</h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "JobPost",
  props: {
    jobData: {
      type: Object,
      required: true
    }
  },
  methods: {

  },

}
</script>

<style>

</style>