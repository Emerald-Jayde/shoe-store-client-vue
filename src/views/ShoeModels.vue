<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <shoe-models-table />
      </div>
    </div>
  </div>
</template>

<script>
import ShoeModelsTable from "./components/ShoeModelsTable.vue";

export default {
  name: "shoe-models",
  components: {
    ShoeModelsTable,
  },
};
</script>
