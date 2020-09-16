<template>
  <main id="cars" class="container-fluid">
    <div class="row my-3">
      <div class="col" id="form">
        <form @submit.prevent="createJob" class="form-inline">
          <div class="form-group p-1">
            <label class="mr-1" for="make">Make</label>
            <input
              v-model="newCar.make"
              type="text"
              name="make"
              id="make"
              class="form-control"
              placeholder="Make..."
            />
          </div>
          <div class="form-group p-1">
            <label class="mr-1" for="model">Model</label>
            <input
              v-model="newCar.model"
              type="text"
              name="model"
              id="model"
              class="form-control"
              placeholder="Model..."
            />
          </div>
          <div class="form-group p-1">
            <label class="mr-1" for="year">Year</label>
            <input
              v-model="newCar.year"
              type="number"
              name="year"
              id="year"
              class="form-control"
              placeholder="Year..."
              min="1900"
              max="2021"
            />
          </div>
          <div class="form-group p-1">
            <label class="mr-1" for="price">Price</label>
            <input
              v-model="newCar.price"
              type="number"
              name="price"
              id="price"
              class="form-control"
              placeholder="Price..."
            />
          </div>
          <div class="form-group p-1">
            <label class="mr-1" for="description">Description</label>
            <input
              v-model="newCar.description"
              type="text"
              name="description"
              id="description"
              class="form-control"
              placeholder="Description..."
            />
          </div>
          <div class="form-group p-1">
            <label class="mr-1" for="img">Image Url</label>
            <input
              v-model="newCar.imgUrl"
              type="url"
              name="img"
              id="img"
              class="form-control"
              placeholder="Image Url..."
            />
          </div>
          <button type="submit" class="btn btn-outline-success">Add Car</button>
        </form>
      </div>
    </div>
    <div class="row" id="data">
      <car v-for="car in cars" :key="car._id" :carData="car" />
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>