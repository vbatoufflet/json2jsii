const { TypeScriptLibraryProject, Semver } = require('projen');

const project = new TypeScriptLibraryProject({
  name: 'json2jsii',
  description: 'Generates jsii structs from JSON schemas',
  authorName: 'Elad Ben-Israel',
  authorEmail: 'elad.benisrael@gmail.com',
  repository: 'https://github.com/joe/schmo.git',
  dependencies: {
    'json-schema': Semver.caret('0.2.5'),
    'codemaker': Semver.caret('1.6.0')
  },
  devDependencies: {
    '@types/json-schema': Semver.caret('7.0.5'),
    'jsii-srcmak': Semver.caret('0.1.1')
  },
  minNodeVersion: '14.0.0',
  releaseToNpm: true
});

project.synth();
