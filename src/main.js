import { createApp } from 'vue'
import VueDisqus from 'vue-disqus'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.use(VueDisqus, {shortname: 'englishonlinegames'})
.mount('#app')
