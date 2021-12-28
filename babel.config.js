module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          '@assets': './src/Assets',
          '@components': './src/Components',
          '@config': './src/Config',
          '@constants': './src/Constants',
          '@navigation': './src/Navigation',
          '@screens': './src/Screens',
          '@services': './src/Services',
          '@store': './src/Store',
          '@utils': './src/Utils',
          '@atoms': './src/Components/Atoms',
          '@actions': './src/Store/Actions',
          '@reducers': './src/Store/Reducers',
          '@sagas': './src/Store/Sagas',
          '@i18n': './src/Utils/i18n',
        },
      },
    ],
  ],
};
