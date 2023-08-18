<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <inventory-table />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <stores-table />
      </div>
    </div>
  </div>
</template>

<script>
import InventoryTable from "./components/InventoryTable.vue";
import StoresTable from "./components/StoresTable.vue";

export default {
  name: "stores",
  components: {
    StoresTable,
    InventoryTable,
  },
};
</script>
