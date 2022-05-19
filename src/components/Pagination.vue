<template>
  <div class="pagination">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="javascript:void(0)"
            aria-label="Previous"
            @click="handlePrevious"
          >
            <span aria-hidden="true">&lt;</span>
          </a>
        </li>
        <template v-if="pageNumbers.length > 0">
          <li
            v-for="(number, index) in pageNumbers"
            :key="index"
            class="page-item"
          >
            <a
              class="page-link"
              :autofocus="true"
              @click="handlePaginate(number)"
            >
              {{ number }}
            </a>
          </li>
        </template>
        <li class="page-item" v-else>
          <a class="page-link" href="!#"> 1 </a>
        </li>

        <li class="page-item">
          <a
            class="page-link"
            href="javascript:void(0)"
            aria-label="Next"
            @click="handleNext"
          >
            <span aria-hidden="true">&gt;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  emits: ["paginate"],
  props: {
    totalConnections: {
      type: Number,
      required: true,
    },
    connectionsPerPage: {
      type: Number,
      default: 5,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      pageNumbers: [],
      totalConnectionsData: this.totalConnections,
      connectionsPerPageDate: this.connectionsPerPage,
      currentPageData: "",
    };
  },
  methods: {
    handlePrevious() {
      if (this.currentPageData > 1) {
        this.currentPageData -= 1;
        this.$emit("paginate", this.currentPageData);
      }
    },
    handleNext() {
      if (this.currentPageData < this.pageNumbers.length) {
        this.currentPageData += 1;
        this.$emit("paginate", this.currentPageData);
      }
    },
    handlePaginate(number) {
      this.currentPageData = number;
      this.$emit("paginate", number);
    },
    setViewNumber() {
      this.pageNumbers = [];
      for (
        let index = 1;
        index <=
        Math.ceil(this.totalConnectionsData / this.connectionsPerPageDate);
        index++
      ) {
        this.pageNumbers.push(index);
      }
    },
  },
  watch: {
    totalConnections: {
      handler: function (val) {
        this.totalConnectionsData = val;
        this.setViewNumber();
      },
      deep: true,
    },
    connectionsPerPageDate: {
      handler: function (val) {
        this.connectionsPerPageDate = val;
        this.setViewNumber();
      },
      deep: true,
    },
  },
  mounted() {
    this.currentPageData = this.currentPage;
    this.setViewNumber();
  },
};
</script>

<style scoped></style>
