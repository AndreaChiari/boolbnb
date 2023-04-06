//importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import IndexPage from "../pages/IndexPage.vue";
import DetailPage from "../pages/DetailPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import Team6Page from "../pages/Team6Page.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: HomePage },
        { path: '/index', name: 'index', component: IndexPage },
        { path: "/apartments", name: "apartment-detail", component: DetailPage },
        { path: "/team", name: "team-page", component: Team6Page },
        { path: '/:pathMatch(.*)*', name: "not-found-page", component: NotFoundPage },

    ],
});

export { router };