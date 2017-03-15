module.exports = (wallaby) => {
  return {
    files: [
      'src/**/*.js'
    ],

    tests: [
      'test/**/*-spec.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};