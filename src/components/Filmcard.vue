<script>
import { store } from '../store';
export default {
    name: "FilmCard",
    data() {
      return {
        store
      }
    }
}
</script>

<template>
  
<div id="container">

  <div class="card" v-for="titles in store.filmList">

    <div class="poster-image">
      <img v-if="titles.poster_path != null" :src="store.imageSizeURL + titles.poster_path" :alt='"Copertina " + titles.title'>
    </div>

    <div class="title">
      <h2> {{ titles.title }}</h2>
     <h3>{{ titles.original_title }}</h3>
    </div>
    
    <div class="other-infos">
      <div class="flag">
        <img :src='store.nationFlag + titles.original_language + ".svg" ' :alt="titles.original_language">
      </div>
      <div id="vote">
        <span v-for="i in 5">

          <span v-if="i <= Math.round(titles.vote_average/2)">
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>

          <span v-else>
            <font-awesome-icon icon="fa-regular fa-star" />
          </span>

        </span>
      </div>

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

    .poster-image{
      text-align: center;
      margin: 10px 0;
    }

    .other-infos {
      span {
        margin-right: 20px;
      }

      .flag {
          width: 70px;
          margin: 0 auto;
          margin-top: 20px;

          img {
            width: 100%;
          }
        }

      #vote {
        text-align: center;
        margin: 20px 0;
      }
    }
  }
}

</style>
