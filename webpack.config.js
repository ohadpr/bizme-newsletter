module.exports = {
    entry: './admin/admin.js',
    output: {
        filename: './admin/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    }
}
