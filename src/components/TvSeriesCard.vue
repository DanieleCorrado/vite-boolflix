<script>
import { store } from '../store';
export default {
    name: "TvSeriesCard",
    data() {
      return {
        store
      }
    }
}
</script>

<template>
  
<div id="container">

  <div class="card" v-for="titles in store.TvList">

    <div class="title">
      <h2> {{ titles.name }}</h2>
     <h3>{{ titles.original_name }}</h3>
    </div>
    
    <div class="other-infos">
      <div class="flag">
        <img :src='store.nationFlag + titles.original_language + ".svg" ' :alt="titles.original_language">
      </div>
      <span>{{ Math.round(titles.vote_average) }}</span>
    </div>

  </div>

</div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

#container {
  
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;

  .card {
    width: calc(100% / 5 - 20px);
    margin: 0 10px;
    margin-bottom: 20px;
    color: $textColor;
    background-color: $cardColor;

    .other-infos {
      span {
        margin-right: 20px;
      }

      .flag {
          width: 70px;
          margin: 0 auto;

          img {
            width: 100%;
          }
        }
    }
  }
}

</style>
