import Vue from 'vue'
import App from './components/App';
import defaultLayout from './layouts/default';
import router from './router';
// import from remote
import StorageApp from 'storage/StorageApp';
console.log('StorageApp >>', StorageApp);
// import('storage/SideBar')
//     .then((res) => {
//         console.log('StorageApp >>', res);
//     })
//     .catch((ex) => {
//         console.log('ex >>', ex);
//     })

Vue.component('l-default', defaultLayout);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
