<script>
import Header from './components/Header.vue';
import ShowTitles from './components/ShowTitles.vue';
import { store } from './store';
import axios from 'axios';


export default {
  components: {
    Header,
    ShowTitles
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getFilms() {

      let FilmURL = this.store.apiFilmURL;
      let tvURL = this.store.apiTVURL;

      // Controllo se l'utente ha èffettuato una ricerca in caso affermativo aggiungo la stringa inserita dall'utente all'url dell'API

      if(store.searchText != "") {
        store.searchText= store.searchText.replace(/ /g, "-");
        FilmURL += `${this.store.searchText}`;
        tvURL += `${this.store.searchText}`;
        store.searchText = "";
      }

      // Effettuo la richiesta al server per accedere ai film

      axios.get(FilmURL).then(films => {
        console.log(FilmURL);
          store.filmList = films.data.results;
          console.log(store.filmList);
        }).catch(error => {
          console.log(error);
        })

      // Effettuo la richiesta al server per accedere alle serie tv

      axios.get(tvURL).then(Series => {
        console.log(tvURL);
          store.TvList = Series.data.results;
          console.log(store.TvList);
        }).catch(error => {
          console.log(error);
        })

    },
    created() {
      this.getFilms();
    },
  }
}
</script>

<template>
 
  <Header @search="getFilms"/>

  <main>
    <ShowTitles/>
  </main>
  

</template>

<style lang="scss" scoped>

@use './styles/generals.scss' as *;

main {
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
}

</style>
