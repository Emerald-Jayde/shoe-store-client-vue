<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Live Inventory</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Store</th>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Shoe Model</th>
            <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
            >Current Stock
            </th>
            <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
            >Updated At
            </th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="r in responses" :key="r.id"
                :class="{ 'bg-danger bg-opacity-25 text-white': r.critical,
                 'bg-warning bg-gradient text-white': r.warn}"
                :id="r.id"
            >
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ r.store }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ r.shoe_model }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0" :id="`amt-${r.id}`">{{ r.amount }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0" :id="`updated-at-${r.id}`">{{ r.updated_at }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Pusher from "pusher-js";

var pusher = new Pusher('f8fae05c56b80676064a', {
  encrypted: true,
  cluster: 'us2'
});

var channel = pusher.subscribe('shoe-store-potloc');

export default {
  name: "inventory-table",
  props:["class"],
  data() {
    return {
      responses: [],
    };
  },
  created() {
    this.fetchData()
  },
  mounted() {
    this.fetchData()
    this.fetchUpdate()
  },
  methods: {
    async fetchData() {
      const response = await fetch(`http://127.0.0.1:3000/api/v1/inventory`)
      var responses = await response.json();
      responses.forEach((res) =>
          this.responses.push({
            id: res.id,
            store: res.store,
            shoe_model: res.shoe_model,
            updated_at: res.updated_at,
            amount: res.amount,
            critical: this.isCritical(res.amount),
            warn: this.isWarn(res.amount)
          })
      )
    },
    fetchUpdate() {
      channel.bind('inventoryUpdate', data => {
        const invId = data.inventory_id
        const amt = document.getElementById("amt-" + invId)
        amt.innerHTML = data.new_amount
        const updatedAt = document.getElementById("updated-at-" + invId)
        updatedAt.innerHTML = data.updated_at

        const tr = document.getElementById(invId)

        if (this.isCritical(data.new_amount)) {
          if (!tr.classList.contains('bg-danger')) {
            tr.classList.add('bg-danger', 'bg-opacity-25', 'text-white')
          }
        } else if (this.isWarn(data.new_amount)) {
          if (!tr.classList.contains('bg-warning')) {
            tr.classList.add('bg-warning', 'bg-gradient', 'text-white')
          }
        } else {
          tr.classList.remove(
              'bg-danger', 'bg-opacity-25', 'bg-warning', 'bg-gradient', 'text-white'
          )
        }

        tr.parentElement.prepend(tr)
      });
    },
    isCritical(amount) {
      return amount < 11
    },
    isWarn(amount) {
      return amount > 10 && amount < 21
    },
  },
};
</script>
