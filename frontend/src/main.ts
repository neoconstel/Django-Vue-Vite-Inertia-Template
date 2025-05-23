import "vite/modulepreload-polyfill"; // <-----added for inertia integration
import "./assets/main.css";

import { createApp, h, resolveComponent } from "vue"; // <-----h, resolveComponent added
import { createInertiaApp } from "@inertiajs/vue3"; // <-----added for inertia integration

// for use as a default layout page which acts as a wrapper on top of base.html in the django backend
import AppLayout from "./App.vue";

// added for inertia integration (replacement for default createApp)
createInertiaApp({
  resolve: (pageName) =>
    import(`./views/${pageName}.vue`).then((page) => {
      // Inject App.vue as the layout if not already specified
      if (!page.default.layout) {
        page.default.layout = AppLayout;
      }
      return page;
    }),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
