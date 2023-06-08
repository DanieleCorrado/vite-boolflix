<script>
import FilmCard from './Filmcard.vue';
import TvSeriesCard from './TvSeriesCard.vue';
import { store } from '../store';
export default {
    name: "ShowTitles",
    components: {
      FilmCard,
      TvSeriesCard
    },
    data() {
      return {
        store,
      }
    }
}
</script>

<template>

  <div id="film-list">

    <h2>FILMS</h2>

    <div v-if="store.filmList.length > 0" >
      <FilmCard />
    </div>

    <div v-else>
      <h2>Nessun film trovato</h2>
    </div>

  </div>

  <div id="seriev-list">

    <h2>SERIE TV</h2>

    <div v-if="store.TvList.length > 0" >
      <TvSeriesCard/>
    </div>
    <div v-else>
      <h2>Nessuna serie tv trovata</h2>
    </div>
  </div>
  
  

</template>

<style lang="scss" scoped>

#container {
  
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
}

</style>
