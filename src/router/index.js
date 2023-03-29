//importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import IndexPage from "../pages/IndexPage.vue";
import DetailPage from "../pages/DetailPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: HomePage },
        { path: '/index', name: 'index', component: IndexPage },
        { path: "/apartments/:id", name: "apartment-detail", component: DetailPage },
        {path: '/:pathMatch(.*)*', name: "not-found-page", component: NotFoundPage}

    ],
});

export { router };