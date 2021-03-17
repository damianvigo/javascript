<template>
  <div id="search-container">
    <input type="text" v-model='query' autofocus
    v-on:input="$emit('query-change', query)" />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style scoped>
#search-container {
  width: 50%;
  margin: 0 auto;
}

input {
  padding: 10px;
  width: 100%;
  outline: none;
}
</style>

