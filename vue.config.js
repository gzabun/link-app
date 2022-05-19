module.exports = {
  lintOnSave: true,
  configureWebpack: {
    devtool:
      process.env.NODE_ENV === "development" // production
        ? "inline-source-map"
        : false,
  },
  css: {
    sourceMap: process.env.NODE_ENV === "development",
    loaderOptions: {
      scss: {
        additionalData: `@import "/public/scss/helpers/variable.scss";
        @import "/public/scss/helpers/function.scss";
        @import "/public/scss/helpers/mixin.scss";`,
      },
    },
  },
};
