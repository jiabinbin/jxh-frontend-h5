// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '',
        assetsSubDirectory: 'static',
        faviconPath: '',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        productionHashOnes: ['index'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        // 端口
        port: 8000,
        // 启动后自动打开浏览器
        autoOpenBrowser: true,
        // 发布路径
        assetsPublicPath: '/',
        // 静态资源文件夹
        assetsSubDirectory: 'static',
        // faviconPath: path.resolve(__dirname, '../src/assets/favicon.ico'),
        faviconPath: '',

        // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
        // 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
        // 使用方法：https://vuejs-templates.github.io/webpack/proxy.html
        proxyTable: {
            // '/api': {
            //     target: 'http://xxxxxx.com', // 接口的域名
            //     // secure: false,  // 如果是https接口，需要配置这个参数
            //     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            //     pathRewrite: {
            //         '^/api': ''
            //     }
            // }
        },

        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: true
    }
}
