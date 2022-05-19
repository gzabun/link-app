<template>
  <div class="card parent-card">
    <div class="card-body">
      <div class="card submit-card c-pointer">
        <div class="card-body" @click="$router.push('/new')">
          <i class="bi bi-plus-lg"></i>
        </div>
      </div>
      <div class="submit-link">
        <h5>SUBMIT A LINK</h5>
      </div>
    </div>
  </div>
  <div class="divider" />
</template>

<script>
export default {
  name: "SubmitCard",
};
</script>

<style scoped></style>
