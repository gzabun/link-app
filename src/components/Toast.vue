<template>
  <div class="toast-wrapper">
    <div
      class="toast v-toast"
      :class="type"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-body">
        <span>{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: "Mesaj Bulunamadı",
      required: true,
    },
    type: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      opacity: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
#app {
  .toast-wrapper {
    opacity: 1;
    position: fixed;
    inset-inline-end: 20px;
    inset-block-start: 20px;

    .v-toast {
      background-color: #ddf9d3;
      opacity: v-bind(opacity);
      text-align: center;
      z-index: 9;

      &.danger {
        background-color: $danger;
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>
