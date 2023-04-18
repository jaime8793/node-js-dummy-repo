const { sayHi } = require("./5-utils")

//Modules
const { john, peter} = require('./4-names')
const data = require('./6-alternative-flavour')
console.log(data)
require('./7-mind-grenade')

sayHi('susan')
sayHi(peter)
sayHi(john)
