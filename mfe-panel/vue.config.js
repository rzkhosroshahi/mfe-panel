module.exports = {
    chainWebpack: (config) => {
        config
            .plugin('module-federation-plugin')
            .use(require('webpack').container.ModuleFederationPlugin, [{
                name: "host",
                filename: "remoteEntry.js",
                remotes: {
                    storage: 'storage@http://localhost:9000/remoteEntry.js',
                },
            }])
    },
}
