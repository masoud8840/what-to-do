import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "What To Do | Home",
    },
  },
  {
    path: "/todos",
    name: "TodosList",
    component: () => import("../views/Todos.vue"),
    meta: {
      title: "What To Do | Todos",
    },
  },
  {
    path: "/collections",
    name: "CollectionsList",
    component: () => import("../views/Collections.vue"),
    meta: {
      title: "What To Do | Collections",
    },
  },

  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
    meta: {
      title: "What To Do | Account",
    },
  },
];

const router = createRouter({ history: createWebHistory(), routes });
router.beforeEach((to, _, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
