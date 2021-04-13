import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'



createApp(App).use(router).mixin(mixins).mount('#app')

window.Kakao.init("7c83142dd6338eb782ce71d5c153ffb4");
