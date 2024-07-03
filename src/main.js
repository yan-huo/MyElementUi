import Vue from 'vue';
import App from './App.vue';
// 加载基础ElementUI
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

import ElImageCustom from '../package/Image/index';
Vue.use(ElImageCustom);
import ImageEditor from './ImageEditor.vue';
Vue.component(ImageEditor.name, ImageEditor);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
