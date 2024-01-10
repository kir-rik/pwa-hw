const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
    },
};