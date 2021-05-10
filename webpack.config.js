const svgToMiniDataURI = require('mini-svg-data-uri');
const path = require('path');


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
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                generator: (content) => svgToMiniDataURI(content.toString()),
                encoding: 'utf8',
              },
            },
            {
              loader: 'svg-inline-loader',
              options: {
                removeTags: true
              }
            }
          ],
      },
    ],
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(csv|tsv)$/i,
       use: ['csv-loader'],
     },
     {
       test: /\.xml$/i,
       use: ['xml-loader'],
     },
    ],
    },
};
  
