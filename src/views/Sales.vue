<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <transaction-card />
      </div>
    </div>
  </div>
</template>

<script>
import TransactionCard from "@/views/components/TransactionCard.vue";

export default {
  name: "sales",
  components: {
    TransactionCard
  },
};
</script>