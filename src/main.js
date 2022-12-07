import Vue from "vue";
import App from "./App.vue";
import {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Tag,
  Input,
  DatePicker,
  Option,
  Dialog,
  MessageBox,
  Message,
  Progress,
  Select,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/sass/index.scss";

import router from "./router/index.js";
import store from "./store/index.js";
import http from "axios";

Vue.config.productionTip = false;

Vue.use(Dialog);
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tag);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Option);
Vue.use(Progress);
Vue.use(Select);

Vue.prototype.$http = http;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
