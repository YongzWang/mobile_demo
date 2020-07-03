module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 108
                    })
                ]
            },
            sass: {
                prependData: `@import "@/assets/style/_common.scss";`
            }
        }
    },
    // devServer: {
    //     open: true,
    //     proxy: {
    //         '/api': {
    //             target: 'api.com',
    //             ws: true,
    //             changOrigin: true,
    //             pathRewrite: {
    //                 '/api': '/api'
    //             }
    //         }
    //     }
    // }
}
