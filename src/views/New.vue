<template>
  <Toast :message="toastMessage" v-if="toastStatus" :type="toastType" />

  <div>
    <div class="add-to-list mt-20 parent-list">
      <i
        class="bi bi-arrow-left-short c-pointer"
        @click="$router.push('/')"
      ></i>
      <h6>Return to List</h6>
    </div>
    <h3 class="mt-4">Add New Link</h3>
    <div class="add-form-wrapper">
      <div class="col-12">
        <span>Link Name:</span>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="e.g. Link Name"
          v-model="newConnection.name"
          @keyup.enter="handleSubmit"
        />
      </div>
      <div class="col-12">
        <span>Link URL:</span>
        <input
          type="text"
          id="link"
          class="form-control"
          placeholder="e.g. https://google.com.tr"
          v-model="newConnection.url"
          @keyup.enter="handleSubmit"
        />
      </div>
      <button
        class="btn btn-primary add-button rounded-pill"
        id="new-submit"
        type="submit"
        :disabled="toastStatus"
        @click="handleSubmit"
      >
        ADD
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Toast from "@/components/Toast";

export default {
  name: "New",
  components: { Toast },
  data() {
    return {
      newConnection: {
        name: "",
        url: "",
        point: 0,
        id: Math.floor(Math.random() * 9999999) + 1,
        date: Date.now(),
      },
      toastStatus: false,
      toastType: "",
      toastMessage: "",
    };
  },
  methods: {
    ...mapActions({
      addConnetion: "globalStore/addConnetion",
    }),
    handleSubmit() {
      if (this.newConnection.name != "" && this.newConnection.url != "") {
        let newConnection = this.newConnection;
        this.addConnetion(newConnection);
        this.toastMessage = `${this.newConnection.name} başarıyla eklendi`;
        this.toastStatus = true;
        this.newConnection.id = Math.floor(Math.random() * 9999999) + 1;
        this.newConnection.date = Date.now();
        setTimeout(() => {
          this.toastStatus = false;
          newConnection = [];
          console.log(newConnection);

          // this.$router.push("/");
        }, 1000);
      } else {
        this.toastMessage = "Alanlar Boş Geçilemez";
        this.toastType = "danger";
        this.toastStatus = true;
        setTimeout(() => {
          this.toastStatus = false;
          this.toastType = "";
        }, 1000);
      }
    },
  },
};
</script>

<style scoped></style>
