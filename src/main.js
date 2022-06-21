//app.vue经过vue-loader转换成js
import App from './app';

import {createApp} from '../modules/vue';
createApp(App).mount('#app');