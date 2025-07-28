module.exports = {
    default: {
      require: ['tests/step-definitions/**/*.ts', 'tests/support/**/*.ts'],
      format: ['progress'],
      paths: ['tests/features/**/*.feature'],
      publishQuiet: true,
      requireModule: ['ts-node/register'],
      timeout: 50000
    }
  };
  