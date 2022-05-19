<template>
  <div class="main-wrapper">
    <SubmitCard />
    <Select data-testid="select" @sorter="(type) => sorter(type)" />
    <Toast :message="`${remove.name} başarıyla silindi`" v-if="toastStatus" />

    <Confirm
      v-if="remove.popupStatus"
      :deleteElementName="remove.name"
      @onOk="(status) => handleRemove(status, remove.id)"
    />

    <div class="list-wrapper list" v-if="connectionListPerPage.length != 0">
      <ConnectionCard
        v-for="connection in connectionListPerPage"
        :key="`${
          connection.id ? connection.id : Math.floor(Math.random() * 999999) + 1
        }`"
        :connection-card="connection"
        @removeData="(data) => (remove = data)"
      />
    </div>
    <div class="empty-list" title="empty" v-else>
      You have not added a connection yet!
    </div>
    <Pagination
      :totalConnections="this.connectionsList.length"
      :connectionsPerPage="5"
      :currentPage="1"
      @paginate="this.paginate"
    />
  </div>
</template>

<script>
import Select from "@/components/Select";
import Confirm from "@/components/Confirm";
import SubmitCard from "@/components/SubmitCard";
import Pagination from "@/components/Pagination";
import ConnectionCard from "@/components/ConnectionCard";
import { mapActions, mapState } from "vuex";
import Toast from "@/components/Toast";

export default {
  name: "List",
  components: {
    Toast,
    ConnectionCard,
    Pagination,
    SubmitCard,
    Confirm,
    Select,
  },
  computed: {
    ...mapState({
      list: (store) => store.globalStore.connections,
      currentPageState: (store) => store.globalStore.currentPage,
    }),
  },
  data() {
    return {
      connectionListPerPage: [],
      currentPage: [],
      remove: {},
      toastStatus: false,
      connectionsList: [],
    };
  },
  watch: {
    list: {
      handler: function () {
        this.connectionsList = this.list;

        const indexOfLastConnection = this.currentPage * 5;
        const indexOfFirstConnection = indexOfLastConnection - 5;

        this.connectionListPerPage = this.connectionsList.slice(
          indexOfFirstConnection,
          indexOfLastConnection
        );
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions({
      removeConnection: "globalStore/removeConnection",
    }),
    handleRemove(status, id) {
      this.remove.popupStatus = status;
      if (status) {
        this.removeConnection(id);
        this.toastStatus = true;
        this.remove.popupStatus = false;
        setTimeout(() => {
          this.toastStatus = false;
        }, 500);
      }
    },
    sorter(type) {
      if (type === "descend") {
        this.list.sort((a, b) => b.point - a.point);
      } else {
        this.list.sort((a, b) => a.point - b.point);
      }
      this.connectionsList = this.list;
      this.currentPage = this.currentPageState;

      const indexOfLastConnection = this.currentPageState * 5;
      const indexOfFirstConnection = indexOfLastConnection - 5;

      this.connectionListPerPage = this.connectionsList.slice(
        indexOfFirstConnection,
        indexOfLastConnection
      );
    },

    paginate(pageNumber) {
      this.currentPage = pageNumber;
      this.connectionsList = this.list;
      this.connectionsList.sort((a, b) => b.point - a.point);

      const indexOfLastConnection = this.currentPage * 5;
      const indexOfFirstConnection = indexOfLastConnection - 5;

      this.connectionListPerPage = this.list.slice(
        indexOfFirstConnection,
        indexOfLastConnection
      );
    },
  },
  created() {
    this.connectionsList = this.list;
    this.currentPage = this.currentPageState;
    this.connectionsList.sort((a, b) => b.point - a.point);

    const indexOfLastConnection = this.currentPageState * 5;
    const indexOfFirstConnection = indexOfLastConnection - 5;

    this.connectionListPerPage = this.connectionsList.slice(
      indexOfFirstConnection,
      indexOfLastConnection
    );
  },
};
</script>

<style scoped></style>
