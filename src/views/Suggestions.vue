<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <suggestions-table />
      </div>
    </div>
  </div>
</template>

<script>
import SuggestionsTable from "@/views/components/SuggestionsTable.vue";

export default {
  name: "suggestions",
  components: {
    SuggestionsTable,
  },
};
</script>
