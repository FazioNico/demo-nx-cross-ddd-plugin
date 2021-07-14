module.exports = {
  displayName: 'platform-react-meteo-feature-current-weather',
  preset: '../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../coverage/libs/platform/react/meteo/feature-current-weather',
};
