import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from './plugins/font-awesome' 

const app = createApp(App)

// app.use(router)
// app.use(store)
// app.component("font-awesome-icon", FontAwesomeIcon)
// app.mount('#app')
// app.use('./assets/images/employee.png',image)

// const app = Vue.createApp({
//     data() {
//         return {
//             image: './assets/images/socks_blue.jpg',
//         }
//     },
    
// })
app.use(router)
app.use(store)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
// app.component('/assets/images/employee.png',image)