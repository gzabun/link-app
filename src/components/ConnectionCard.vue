<template>
  <div class="list-parent">
    <div class="card list-card">
      <span>
        <span>{{ connection?.point }}</span>
        <h6>POINTS</h6>
      </span>
    </div>
    <div class="list-detail">
      <i
        data-testid="delete"
        class="delete"
        @click="handleRemove(connection?.id, connection?.name)"
      />
      <h5>{{ connection?.name }}</h5>
      <a :href="connection?.url">{{ connection?.url }}</a>

      <div class="voting">
        <span
          title="up-vote"
          @click="handleUpVote(connection.id, connection.point)"
        >
          <i class="bi bi-arrow-up-short"></i>Up Vote
        </span>
        <span
          title="down-vote"
          class="down-vote"
          @click="handleDownVote(connection.id, connection.point)"
        >
          <i class="bi bi-arrow-down-short"></i>Down Vote
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ConnectionCard",
  props: {
    connectionCard: {
      type: [Array, Object],
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      connection: this.connectionCard,
    };
  },
  methods: {
    ...mapActions({
      upVote: "globalStore/upVote",
      downVote: "globalStore/downVote",
    }),
    handleUpVote(id, point) {
      this.upVote({ id, point });
    },
    handleDownVote(id, point) {
      this.downVote({ id, point });
    },
    handleRemove(id, name) {
      this.$emit("removeData", { popupStatus: true, id, name });
    },
  },
};
</script>

<style scoped></style>
