// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/store'
import App from './App'
import router from './router'
import axios from 'axios'

import iView from 'iView'
import 'iview/dist/styles/iview.css'
// import {Button,Table} from 'iview'
// Vue.component("Button",Button)
// Vue.component("Table",Table)
// import '../my-theme/index.less'  //导入定iview义主题的less文件

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
 
// Vue.use(ElementUI);
Vue.use(iView);
//下面的代码以便在其他组件中可以使用axios
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
