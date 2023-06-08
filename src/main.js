import { createApp } from 'vue';
import '../src/styles/generals.scss';
import '../src/styles/partials/variables.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
library.add(faStarSolid, faStarRegular);
import App from './App.vue';
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
