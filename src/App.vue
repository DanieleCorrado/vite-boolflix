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
      let myURL = this.store.apiURL;

      if(store.searchText != "") {
        store.searchText= store.searchText.replace(/ /g, "-")
        myURL += `${this.store.searchText}`;
        store.searchText = "";
      }

      axios.get(myURL).then(films => {
        console.log(myURL);
          store.filmList = films.data.results;
          console.log(store.filmList);
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
  <ShowTitles/>

</template>

<style lang="scss" scoped>

@use './styles/generals.scss' as *;


</style>
