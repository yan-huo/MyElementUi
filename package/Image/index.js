import Image from './src/main';
import 'element-ui/lib/theme-chalk/icon.css';
import 'element-ui/lib/theme-chalk/image.css';
import 'element-ui/lib/theme-chalk/card.css';
import 'element-ui/lib/theme-chalk/slider.css';
import 'element-ui/lib/theme-chalk/input.css';
import 'element-ui/lib/theme-chalk/input-number.css';

/* istanbul ignore next */
Image.install = function (Vue) {
  Vue.component(Image.name, Image);
};

export default Image;
