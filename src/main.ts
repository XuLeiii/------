import { createApp } from 'vue';
import App from './App.vue';
import '@/style/index.scss';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import router from './router/index';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { i18n } from './i18n';

zhCn.el.pagination.total = '总共：' + `{total}` + '条';

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(pinia).use(router).use(ElementPlus, { locale: zhCn }).use(i18n).mount('#app');
