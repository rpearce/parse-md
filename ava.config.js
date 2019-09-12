export default {
  babel: {
    testOptions: {
      babelrc: false,
      configFile: false
    }
  },
  files: ['test/**/*.js'],
  require: ['@babel/register']
}
