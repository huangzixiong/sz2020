

export default {
    path: "/movie",
    component: () => import("views/movie"), //路由懒加载
    name: "movie"
}