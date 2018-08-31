function HelloWorldPlugin (options) {

}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    console.log('test plugin')
  })
}

module.exports = HelloWorldPlugin