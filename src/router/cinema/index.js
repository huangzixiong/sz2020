

export default {
    path: "/cinema",
    component: () => import("views/cinema"), //路由懒加载
    name: "cinema"
}