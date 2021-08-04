<template>
  <MainCard>
    <h1 class="display-4 mb-5">Register</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control w-25 mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" class="mt-3">Password</label>
        <input type="password" class="form-control  w-25 mx-auto" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-lg w-25 btn-secondary mt-5">Submit</button>
    </form>
  </MainCard>
</template>

<script>
import MainCard from '../components/MainCard.vue'

export default {
  name: "Register",
  components: {
    MainCard,
  }
}
</script>

<style>

</style>