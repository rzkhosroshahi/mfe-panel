// vue.config.js host project
const ModuleFederationPlugin =
    require("webpack").container.ModuleFederationPlugin;

module.exports = {
    publicPath: "http://localhost:9000/",
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "storage",
                filename: "remoteEntry.js",
                exposes: {
                    "./StorageApp": "./src/App.vue",
                    "./SideBar": "./src/SideBar.vue",
                },
            }),
        ],
    },
    devServer: {
        port: 9000,
    },
};
