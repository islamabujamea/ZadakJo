module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  dependencies: {
    '@react-native-community/viewpager': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
  assets: ["./assets/fonts/"], // stays the same
};