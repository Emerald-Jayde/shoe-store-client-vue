<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <inventory-table />
      </div>
    </div>
  </div>
</template>

<script>
import InventoryTable from "@/views/components/InventoryTable.vue";

export default {
  name: "inventory",
  components: {
    InventoryTable,
  },
};
</script>