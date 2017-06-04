const compose = (f1, f2) => (...args) => f1( f2(...args) )

module.exports = compose;