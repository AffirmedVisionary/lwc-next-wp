module.exports = {
    module: {
      rules: [
        {
            test: /\.(png|jpe?g|gif|jp2|webp)$/,
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]'
            }
        },
      ],
    },
};
  