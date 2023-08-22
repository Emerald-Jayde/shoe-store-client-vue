<template>
  <div class="card h-100 mb-4">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">Transactions</h6>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3 overflow-scroll">
      <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">Newest</h6>
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
          v-for="msg in messages.slice().reverse()" :key="msg"
        >
          <div v-if="msg.delta <= 0" class="d-flex align-items-center">
            <argon-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">
                {{ msg.store }}: Inventory for {{ msg.shoe_model }} changed from {{ msg.old_amount }} to {{ msg.new_amount }}
              </h6>
              <span class="text-xs">{{ msg.created_at }}</span>
            </div>
          </div>
          <div v-else class="d-flex align-items-center">
            <argon-button
                color="danger"
                variant="outline"
                size="sm"
                class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-down" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">
                {{ msg.store }}: Inventory for {{ msg.shoe_model }} changed from {{ msg.old_amount }} to {{ msg.new_amount }}
              </h6>
              <span class="text-xs">{{ msg.created_at }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import Pusher from "pusher-js";

var pusher = new Pusher('f8fae05c56b80676064a', {
  encrypted: true,
  cluster: 'us2'
});

var channel = pusher.subscribe('shoe-store-potloc');

export default {
  name: "transaction-card",
  components: {
    ArgonButton,
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    this.fetchData()
    this.fetchNewSales()
  },
  methods: {
    async fetchData() {
      const response = await fetch(`http://127.0.0.1:3000/api/v1/sales/limit/20`)
      var responses = await response.json();
      responses.forEach((res) =>
        this.messages.push({
          store: res.store,
          shoe_model: res.shoe_model,
          created_at: res.created_at,
          old_amount: res.old_amount,
          new_amount: res.new_amount,
          delta: (res.old_amount - res.new_amount),
        })
      )
    },
    fetchNewSales() {
      channel.bind('newSale', data => {
        this.messages.push({
          store: data.store,
          shoe_model: data.shoe_model,
          created_at: data.created_at,
          old_amount: data.old_amount,
          new_amount: data.new_amount,
          delta: (data.old_amount - data.new_amount),
        });
        console.log(data.old_amount - data.new_amount)
      });
    }
  }
};
</script>
