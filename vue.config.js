module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/lesson/'
      : '/' ,

    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
}