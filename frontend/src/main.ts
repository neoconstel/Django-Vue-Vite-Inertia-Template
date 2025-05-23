import "vite/modulepreload-polyfill"; // <-----added for inertia integration
import "./assets/main.css";

import { createApp, h } from "vue"; // <----- 'h' added
import { createInertiaApp } from "@inertiajs/vue3"; // <-----added for inertia integration

// added for inertia integration (replacement for default createApp)
createInertiaApp({
  resolve: (pageName) => import(`./views/${pageName}.vue`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
