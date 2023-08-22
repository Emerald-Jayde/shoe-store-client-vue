<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Shoe Models</h6>
      <argon-button v-on:click="fetchData">Refresh</argon-button>
      <p>Last updated at {{ this.last_updated }}</p>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Shoe Models</th>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Total Sales</th>
            <th class="text-secondary opacity-7"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="r in responses" :key="r">
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{ r.name }}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{ r.total_sales }}</h6>
                </div>
              </div>
            </td>
            <td class="align-middle">
              <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit shoe model"
              >Edit</a>
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
  name: "shoe-models-table",
  components: {ArgonButton},
  data() {
    return {
      responses: null,
      last_updated: ""
    };
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const res = await fetch(`http://127.0.0.1:3000/api/v1/shoe_models`);
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
