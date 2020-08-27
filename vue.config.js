module.exports = {
    // module: {
    //     rules: [{
    //         test: /\.xml$/,
    //         use: {
    //             loader: "xml-loader",
    //             options: {
    //                 explicitArray: false,
    //             },
    //         },
    //     }]
    // }
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule("xml")
            .test(/\.xml$/)
            .use("xml-loader")
            .loader("xml-loader")
            // .tap(() => [{
            //     explicitArray: false,
            // }])
            .end();
    }
};
