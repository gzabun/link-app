<template>
  <select
    class="form-select order-select"
    title="select"
    @change="(event) => $emit('sorter', event.target.value)"
  >
    <option hidden>Order By</option>
    <option value="descend">Most Voted (Z - A)</option>
    <option value="ascend">Less Voted (A - Z)</option>
  </select>
</template>

<script>
export default {
  name: "Select",
  emits: ["sorter"],
};
</script>

<style scoped></style>
