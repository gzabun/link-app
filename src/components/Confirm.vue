<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Remove Link</h5>
          <span aria-hidden="true" @click="$emit('onOk', false)">
            &times;
          </span>
        </div>
        <div class="modal-body">
          <span>Do you want to remove:</span>
          <span class="delete-element"> {{ deleteElementName }} </span>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="rounded-pill confirm-button btn-style"
            data-dismiss="modal"
            @click="$emit('onOk', true)"
          >
            OK
          </button>
          <button
            type="button"
            class="rounded-pill confirm-button"
            @click="$emit('onOk', false)"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Confirm",
  emits: ["onOk"],
  props: {
    deleteElementName: {
      type: String,
      default: "Bir Connection",
      required: true,
    },
  },
};
</script>

<style scoped></style>
