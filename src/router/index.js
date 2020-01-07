import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/screen",
    name: "screen",
    component: () =>
      import(/* webpackChunkName: "screen" */ "../views/Screen.vue")
  },
  {
    path: "/screen1",
    name: "screen2",
    component: () =>
      import(/* webpackChunkName: "screen2" */ "../views/Screen2.vue")
  },
  {
    path: "/",
    name: "home",
    redirect: "monitor",
    component: Home,
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/Login.vue")
      },
      {
        path: "monitor",
        name: "monitor",
        component: () =>
          import(/* webpackChunkName: "monitor" */ "../views/Monitor.vue")
      },
      {
        path: "swiper",
        name: "swiper",
        component: () =>
          import(/* webpackChunkName: "swiper" */ "../components/Swiper.vue")
      },
      {
        path: "charts",
        name: "charts",
        component: () =>
          import(/* webpackChunkName: "charts" */ "../components/charts.vue")
      },
      {
        path: "test",
        name: "test",
        component: () =>
          import(/* webpackChunkName: "test" */ "../components/test.vue")
      },
      {
        path: "carousel",
        name: "carousel",
        component: () =>
          import(
            /* webpackChunkName: "carousel" */ "../components/carousel.vue"
          )
      },
      {
        path: "charts1",
        name: "charts1",
        component: () =>
          import(/* webpackChunkName: "charts1" */ "../components/charts1.vue")
      },
      {
        path: "charts2",
        name: "charts2",
        component: () =>
          import(/* webpackChunkName: "charts2" */ "../components/charts2.vue")
      },
      {
        path: "charts3",
        name: "charts3",
        component: () =>
          import(/* webpackChunkName: "charts3" */ "../components/charts3.vue")
      },
      {
        path: "cyd",
        name: "cyd",
        component: () =>
          import(/* webpackChunkName: "cyd" */ "../views/ChuangYuDun.vue")
      },
      {
        path: "gpt",
        name: "gpt",
        component: () =>
          import(/* webpackChunkName: "gpt1" */ "../views/Gpt.vue")
      },
      {
        path: "codesj",
        name: "codesj",
        component: () =>
          import(/* webpackChunkName: "codesj" */ "../views/CodeSj.vue")
      },
      {
        path: "protect",
        name: "protect",
        component: () =>
          import(/* webpackChunkName: "protect" */ "../views/Protect.vue")
      },
      {
        path: "risk",
        name: "risk",
        component: () =>
          import(/* webpackChunkName: "risk" */ "../views/Risk.vue")
      },
      {
        path: "supervise",
        name: "supervise",
        component: () =>
          import(/* webpackChunkName: "supervise" */ "../views/Supervise.vue")
      },
      {
        path: "safeaudit",
        name: "safeaudit",
        component: () =>
          import(/* webpackChunkName: "safeaudit" */ "../views/SafeAudit.vue")
      },
      {
        path: "kdb",
        name: "kdb",
        component: () =>
          import(/* webpackChunkName: "kdb" */ "../views/Kdb.vue")
      },
      {
        path: "safesolution",
        name: "safesolution",
        component: () =>
          import(
            /* webpackChunkName: "safesolution" */ "../views/SafeSolution.vue"
          )
      },
      {
        path: "permeate",
        name: "permeate",
        component: () =>
          import(/* webpackChunkName: "permeate" */ "../views/Permeate.vue")
      },
      {
        path: "datashield",
        name: "datashield",
        component: () =>
          import(/* webpackChunkName: "datashield" */ "../views/DataShield.vue")
      },
      {
        path: "safetyawareness",
        name: "safetyawareness",
        component: () =>
          import(
            /* webpackChunkName: "safetyawareness" */ "../views/SafetyAwareness.vue"
          )
      },
      {
        path: "clouddefense",
        name: "clouddefense",
        component: () =>
          import(
            /* webpackChunkName: "clouddefense" */ "../views/CloudDefense.vue"
          )
      },
      {
        path: "contractsj",
        name: "contractsj",
        component: () =>
          import(/* webpackChunkName: "contractsj" */ "../views/ContractSj.vue")
      },
      {
        path: "safetycheck",
        name: "safetycheck",
        component: () =>
          import(
            /* webpackChunkName: "safetycheck" */ "../views/SafetyCheck.vue"
          )
      },
      {
        path: "zoomeye",
        name: "zoomeye",
        component: () =>
          import(/* webpackChunkName: "zoomeye" */ "../views/ZoomEye.vue")
      },
      {
        path: "drill",
        name: "drill",
        component: () =>
          import(/* webpackChunkName: "drill" */ "../views/Drill.vue")
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "router_active",
  routes
});

export default router;
