// 代码压缩
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

// 是否为生产环境
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  // 基本路径
  publicPath: isProduction ? "/" : "/",
  // publicPath: isProduction ? '/heyun/' : '/',
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  chainWebpack: config => {
    if (isProduction) {
      //图片压缩
      // config.module
      //   .rule("images")
      //   .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      //   .use("image-webpack-loader")
      //   .loader("image-webpack-loader")
      //   .options({ bypassOnDebug: true });
      // 删除预加载
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
      // 压缩代码
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        chunks: "all"
      });
      if (process.env.npm_config_report) {
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
          .end();
      }
    }
  },
  configureWebpack: config => {
    // 生产环境相关配置
    if (isProduction) {
      config.plugins.push(
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"] // 移除console
            }
          }
        })
      );
      config.performance = {
        hints: "warning",
        // 入口起点的最大体积 整数类型（以字节为单位）
        maxEntrypointSize: 50000000,
        // 生成文件的最大体积 整数类型（以字节为单位 300k）
        maxAssetSize: 30000000,
        // 只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
          return assetFilename.endsWith(".js");
        }
      };
    }
  },
  devServer: {
    host: "127.0.0.1",
    port: 8088, // 端口
    open: true, // 自动开启浏览器
    compress: false, // 开启压缩
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
