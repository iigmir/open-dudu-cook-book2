module.exports = {
    configureWebpack: {
        module: {
            rules: [{
                test: /\.xml$/,
                use: {
                    loader: "xml-loader",
                    options: {
                        explicitArray: false,
                    },
                },
            }]
        }
    }
};
