const withImages = require("next-images");

module.exports = withImages({
  target: "serverless",
  poweredByHeader: false,
  webpack: function (config, { webpack }) {
    config.module.rules.push({
      test: /\.(eot|svg|gif|md)$/,
      loaders: ["style-loader", "css-loader", "less-loader"],
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          ENV: JSON.stringify(process.env.ENV),
        },
      })
    );

    return config;
  },
});
