<script>
import { store } from '../store';
export default {
    name: "TvSeriesCard",
    data() {
      return {
        store
      }
    },
    methods: {
      fromNumberToStars(vote){

        const votes = Math.round(vote)/2;

        for(let i = 0; i < votes; i++) {
          store.stars[i] = "star";
        }

        console.log(store.stars)

      }
    }
}
</script>

<template>
  
<div id="container">

  <div class="card" v-for="titles in store.TvList">

    <div class="poster-image">
      <img v-if="titles.poster_path != null" :src="store.imageSizeURL + titles.poster_path" :alt='Copertina + titles.name'>
    </div>

    <div class="back-card" :class="titles.poster_path == null ? 'show':''">
      
      <div class="title">
        <h2><b>Title:</b> {{ titles.name }}</h2>
        <h4 v-if="titles.name != titles.original_name"><b>Original title:</b> {{ titles.original_name }}</h4>
      </div>
    
      <div class="other-infos">

        <div class="flag">
          <span><b>original language:</b></span>
          <img :src='store.nationFlag + titles.original_language + ".svg" ' :alt="titles.original_language">
        </div>
        
      <div id="vote">
        <span><b>Vote: </b></span>
        <span v-for="i in 5">

          <span class="stars full" v-if="i <= Math.round(titles.vote_average/2)">
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>

          <span class="stars" v-else>
            <font-awesome-icon icon="fa-regular fa-star" />
          </span>

        </span>
      </div>
      <div class="Overview" v-if="titles.overview != ''"><b>Overview: </b> {{ titles.overview }}</div>

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
      display: inline-block;
    }
    &:hover .poster-image{
      display: none;
    }

    .back-card {
      display: none;
      padding: 10px;
    }

    .show {
      display: inline-block;
    }

    &:hover .back-card{
      display: inline-block;
    }

    .other-infos {

      .flag {
        margin-top: 20px;
        display: flex;
        justify-content:flex-start;

        img {
          width: 20%;
          margin-left: 20px;
        }
      }

      #vote {
        margin: 20px 0;
        span {
          margin-right: 10px;
        }

        .stars{
          font-size: 30px;
        }

        .stars.full {
            color: yellow;
        }
      }
    }
  }
}

</style>
