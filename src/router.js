import { createRouter, createWebHistory } from "vue-router";

import HomeVue from "./pages/Home.vue"
import ContactVue from "./pages/Contact.vue"
import AboutVue from "./pages/About.vue"
import PortfolioVue from "./pages/Portfolio.vue"
import ResumeVue from "./pages/Resume.vue"
import ServicesVue from "./pages/Services.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeVue,
        meta: {layout: "landing"},
    },
    {
        path: "/About",
        name: "About",
        component: AboutVue,
    },
    {
        path: "/Resume",
        name: "Resume",
        component: ResumeVue,
    },
    {
        path: "/Contact",
        name: "Contact",
        component: ContactVue,
    },
    {
        path: "/Services",
        name: "Services",
        component: ServicesVue,
    },
    {
        path: "/Portfolio",
        name: "Portfolio",
        component: PortfolioVue,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;