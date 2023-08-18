<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Stores</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Store</th>
            <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
            >Best Seller
            </th>
            <th
                class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
            >Worst Seller
            </th>
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
              <p class="text-xs font-weight-bold mb-0">{{ r.best_shoe }}</p>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">{{ r.worst_shoe }}</span>
            </td>
            <td class="align-middle">
              <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit store"
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

export default {
  name: "stores-table",
  data() {
    return {
      responses: null,
    };
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const res = await fetch(`http://127.0.0.1:3000/api/stores`);
      const stores = await res.json();
      this.responses = stores;
    },
  },
};
</script>
