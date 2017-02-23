var path = require('path');
var webpack = require('webpack');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  //define phaser
  module: {
      loaders: [
          { test: /pixi.js/, loader: "script" },
      ]
  },
  resolve: {
        alias: {
            'phaser': phaser,
            'pixi.js': pixi,
            'p2': p2,
        }
  },
  //define entry point
  entry: './js/main.js',
  //define output point
  output: {
      path:'builds',
      filename: 'bundle.js'
    }
}
