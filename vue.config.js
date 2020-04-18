module.exports = {
  css: {
    loaderOptions: {
      sass: {
        /// need to have installed modules: "npm install --save-dev node-sass sass-loader"
        /*
         * include only $ _mixins and _variables .scss $
         * global and shared styles - import in $ App.vue $
         * otherwise this is going to cause duplicates in <head>
         */
        prependData: `
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_variables.scss";
        `
      }
    }
  }
};
