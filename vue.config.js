const path = require("path");


module.exports = {
    devServer: {
        open: false, //启动项目自动打开浏览器
        proxy: {
            "/ajax": {
                target: "https://m.maoyan.com",
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {  //文件夹别名配置
            alias: {
                "@": path.resolve(__dirname, "./src/"), //路径的拼接
                "common": path.resolve(__dirname, "./src/common"),
                "components": path.resolve(__dirname, "./src/components"),
                "router": path.resolve(__dirname, "./src/router"),
                "store": path.resolve(__dirname, "./src/store"),
                "utils": path.resolve(__dirname, "./src/utils"),
                "views": path.resolve(__dirname, "./src/views"),
                "api": path.resolve(__dirname, "./src/api"),
            }

        }
    }
}