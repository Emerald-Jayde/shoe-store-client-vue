<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Suggestions</h6>
      <argon-button v-on:click="fetchData">Refresh</argon-button>
      <p>Last updated at {{ this.last_updated }}</p>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Shoe Model</th>
            <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
            >From Store</th>
            <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
            >To Store
            </th>
            <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
            >Current Inventory at Orgin
            </th>
            <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
            >Current Inventory at Destination
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="r in responses" :key="r">
            <td>
              <p class="text-xs font-weight-bold mb-0">{{ r.shoe_model }}</p>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">{{ r.high_stock_store }}</p>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">{{ r.low_stock_store }}</p>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">{{ r.high_stock_amount }}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">{{ r.low_stock_amount }}</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "suggestions-table",
  components: {ArgonButton},
  data() {
    return {
      responses: [],
      last_updated: ""
    };
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const res = await fetch(`http://127.0.0.1:3000/api/v1/inventory/suggestions`);
      this.responses = await res.json();
      this.getNow();
    },
    getNow() {
      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.last_updated = date + ' ' + time;
    }
  },
};
</script>
