const crypto = require.resolve('crypto-browserify');
const url = require.resolve('url/');
module.exports = {
  resolver: {
    extraNodeModules: {
        crypto,
        url,
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser.js'),
        stream: require.resolve('readable-stream'),
        vm: require.resolve('vm-browserify'),
        net: require.resolve('react-native-tcp'),
        fs: require.resolve('react-native-fs')
      }
  }
};