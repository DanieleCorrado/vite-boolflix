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

  <div id="logo">
    <h1>BOOLFIX</h1>
  </div>

  
  <div id="search-bar">
    <input type="text" placeholder="Inserici il titolo del film" v-model="store.searchText" @keypress.enter="$emit('search')">
    <button type="submit" @click="$emit('search')">Search</button>
  </div>

</div>

</template>

<style lang="scss" scoped>

@use '../styles/generals.scss' as *;
@use '../styles/partials/variables.scss' as *;

#container {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 10px 20px;

  #logo{
    color: $siteNameColor;
  }

  #search-bar {
    input{
      margin-right: 10px;
      border-radius: 5px;
      padding: 5px;
    }

    button {
      border-radius: 5px;
      padding: 5px;
    }
  }
}

</style>
