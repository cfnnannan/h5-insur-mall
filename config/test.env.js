'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

console.log("env testing...")
module.exports = merge(prodEnv, {
  NODE_ENV: '"testing"'
})
