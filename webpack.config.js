const path = require('path')

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '~': path.resolve('resources/css'),
        }
    },
    output: {
        chunkFilename: 'js/[name].js?id=[chunkhash]',
    }
}
