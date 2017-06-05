module.exports = (wallaby) => {
  return {
    files: [
      'src/**/*.js',
      'test/**/*-helper.js'
    ],

    tests: [
      'test/**/*-spec.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};
