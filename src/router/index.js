import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../routes/Home.vue";
import Login from "../routes/Login.vue";
import WorkoutRoutine from "../routes/WorkoutRoutine.vue";
import Progress from "../routes/Progress.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "HomeDefault",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/progress",
    name: "progress",
    component: Progress
  },
  {
    path: "/create-workout",
    name: "create-workout",
    component: WorkoutRoutine
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: '/',
    name: 'Experior | Workout Tracker',
    component: Login,
    meta: {
      title: 'Vue Template',
      metaTags: [
        {
          name: 'description',
          content: 'Vue Template of University of Illinois at Chicago'
        },
        {
          property: 'og:description',
          content: 'Vue Template of University of Illinois at Chicago'
        }
      ]
    }
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
