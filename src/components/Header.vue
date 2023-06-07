<script>
import { store } from '../store';
export default {
    name: "Header",
    data() {
      return {
        store
      }
    }
}
</script>

<template>
  
<div id="container">

  <input type="text" placeholder="Inserici il titolo del film" v-model="store.searchText" @keypress.enter="$emit('search')">
  <button type="submit" @click="$emit('search')">Submit</button>

</div>

</template>

<style lang="scss" scoped>


</style>
